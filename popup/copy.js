function cleanTab(tabs) {
	const tab = tabs[0];
	const url = tab.url;

	const page = getSupportedPage(url);

	var cleanUrl = null;
	if(page != null)
	{
		cleanUrl = cleanSupportedUrl(page, url);
	}
	else
	{
		cleanUrl = cleanGenericUrl(tab.url);
	}

	let delta = url.length - cleanUrl.length;
	document.getElementById("status").textContent = "Characters Removed: " + delta;

	copyToClipboard(cleanUrl);
}

function cleanSupportedUrl(page, url) {
	console.log("cleanSupportedUrl");
	var parts = getUrlParts( url, page );

	console.log("parts?");

	var cleanUrl = page.urlTemplate;
	for( var ii=0; ii<page.captureGroups; ++ii )
	{
		cleanUrl = cleanUrl.replace( "URL_ID_"+ii+"_HERE", parts[ii+1] );
	}

	return cleanUrl;
}

function cleanGenericUrl(urlStr) {
	console.log("cleanGenericUrl");

	const paramBlackList = [
		"utm_source",
		"utm_medium",
		"utm_campaign",
		"utm_term",
		"utm_content"
	];

	var url = new URL(urlStr);

	for( ii in paramBlackList ) {
		var param = paramBlackList[ii];
		url.searchParams.delete(param);
	}

	return url.toString();
}

function cleanUrl() {
	browser.tabs.query({active: true}).then(cleanTab)
}

function copyToClipboard(text) {
	console.log("copyToClipboard()");
	console.log(text);
	
	navigator.clipboard.writeText(text).then(function() {
		console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
		console.error('Async: Could not copy text: ', err);
	});
}

window.onload = cleanUrl;