function getSupportedPage( url )
{
	console.log("getSupportedPage: " + url);
	var supportedPage = null

	const site = findSite(url)
	if( site !== null )
	{
		console.log("site found!");

		for( var i in site.pages )
		{
			var page = site.pages[i];
			console.log("checking page: " + page.urlTemplate);
			var parts = getUrlParts( url, page );

			if( parts !== null && parts.length == page.captureGroups + 1 )
			{
				supportedPage = page;
				break;
			}
		}
	}
	
	return supportedPage;
}

function checkDomain( url, site )
{
	console.log("Checking domain: " + site.domain);
	const domainRegex = new RegExp( "^(?:http|https):\/\/(?:www.)?" + site.domain + ".*$", "i" );
	return domainRegex.test( url );
}

function getUrlParts( url, page )
{
	const pageCapturePattern = new RegExp( page.capturePattern );
	return pageCapturePattern.exec( url );
}

function findSite( url )
{
    var siteData = null;
    for( var ii in supportedSites )
    {
		let site = supportedSites[ii];
        if( checkDomain(url, site) )
        {
            siteData = supportedSites[ii];
            break;
        }
    }
    return siteData;
}