function getSupportedPage( url )
{
	console.log("getSupportedPage: " + url);
	let supportedPage = null;

	const site = findSite(url)
	if( site !== null )
	{
		console.log("site found!");

		for(let i in site.pages )
		{
			const page = site.pages[i];
			console.log("checking page: " + page.urlTemplate);
			const parts = getUrlParts(url, page);

			if( parts !== null && parts.length === (page.captureGroups + 1) )
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
	const domainRegex = new RegExp( "^(?:http|https):\/\/(?:.*\.)?" + site.domain + ".*$", "i" );
	return domainRegex.test( url );
}

function getUrlParts( url, page )
{
	const pageCapturePattern = new RegExp( page.capturePattern );
	return pageCapturePattern.exec( url );
}

function findSite( url )
{
	let siteData = null;
	for(let ii in supportedSites )
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