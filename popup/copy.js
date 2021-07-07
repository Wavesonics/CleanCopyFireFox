const Mode = { 
	SUPPORTED: 'supported',
	TRACKINGREMOVED: 'tracking-removed',
	COPIED: 'copied',
 }

function cleanTab(tabs) {
	const tab = tabs[0];
	const url = tab.url;
	const page = getSupportedPage(url);

	let mode = Mode.COPIED;

	let cleanUrl = null;
	if(page != null)
	{
		cleanUrl = cleanSupportedUrl(page, url);
		mode = Mode.SUPPORTED;
	}
	else
	{
		cleanUrl = cleanGenericUrl(tab.url);
		if(tab.url.toString().length > cleanUrl.length)
		{
			mode = Mode.TRACKINGREMOVED;
		}
		else
		{
			mode = Mode.COPIED;
		}
	}

	let delta = url.length - cleanUrl.length;
	let percent = ((1.0-(cleanUrl.length / url.length)) * 100.0).toFixed(1);
	document.getElementById("status").innerHTML = "<strong>"+percent + "%</strong> reduction" + "<br /><span class=\"small\">" + delta + " characters removed</span>";

	let modeStr = "";
	switch(mode)
	{
		case Mode.SUPPORTED:
			modeStr = "Supported Site";
			break;
		case Mode.TRACKINGREMOVED:
			modeStr = "Tracking Removed";
			break;
		case Mode.COPIED:
			modeStr = "Copied";
			break;
	}
	document.getElementById("method").textContent = modeStr + "!";

	copyToClipboard(cleanUrl);
}

function cleanSupportedUrl(page, url) {
	console.log("cleanSupportedUrl");
	let parts = getUrlParts( url, page );

	console.log("parts?");

	let cleanUrl = page.urlTemplate;
	for( let ii=0; ii<page.captureGroups; ++ii )
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

	let url = new URL(urlStr);

	for(let ii in paramBlackList ) {
		let param = paramBlackList[ii];
		url.searchParams.delete(param);
	}

	return url.toString();
}

function cleanUrl() {
	browser.tabs.query({active: true, currentWindow: true}).then(cleanTab)
}

function copyToClipboard(text) {
	console.log("copyToClipboard()");
	console.log(text);
	
	navigator.clipboard.writeText(text).then(function() {
		console.log('Copying to clipboard was successful!');
	}, function(err) {
		console.error('Could not copy text: ', err);
	});
}

window.onload = cleanUrl;