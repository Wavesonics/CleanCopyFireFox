const supportedSites = [
	{
		domain : "youtube.com",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/(?:www\.)?youtube\.com\/watch\?(?:.*&)*v=([a-zA-Z0-9_-]+).*$/i,
				urlTemplate : "https://youtu.be/URL_ID_0_HERE"
			}
		]
	},
	{
		domain : "amazon.com",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/(?:.*\.)?amazon\.com\/(?:.*\/)*dp\/((?:product\/)?[a-zA-Z0-9_-]+)(?:\/)*.*$/i,
				urlTemplate : "http://amazon.com/dp/URL_ID_0_HERE/"
			},
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/(?:.*\.)?amazon\.com\/(?:.*\/)*gp\/((?:product\/)?[a-zA-Z0-9_-]+)(?:\/)*.*$/i,
				urlTemplate : "http://amazon.com/gp/URL_ID_0_HERE/"
			}
		]
	},
	{
		domain : "amazon.co.uk",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/(?:.*\.)?amazon\.co\.uk\/(?:.*\/)*gp\/((?:product\/)?[a-zA-Z0-9_-]+)(?:\/)*.*$/i,
				urlTemplate : "http://amazon.co.uk/gp/URL_ID_0_HERE/"
			},
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/(?:.*\.)?amazon\.co\.uk\/(?:.*\/)*dp\/((?:product\/)?[a-zA-Z0-9_-]+)(?:\/)*.*$/i,
				urlTemplate : "http://amazon.co.uk/dp/URL_ID_0_HERE/"
			}
		]
	},
	{
		domain : "play.google.com",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/play\.google\.com\/store\/apps\/details\?(?:.*&)*id=((?:[a-zA-Z0-9_.])+).*$/i,
				urlTemplate : "https://play.google.com/store/apps/details?id=URL_ID_0_HERE"
			}
		]
	},
	{
		domain : "maps.google.com",
		pages :
		[
			{
				captureGroups : 3,
				capturePattern : /^(?:http|https):\/\/maps\.google\.com\/maps\?(?:.*&)*(?:q=([',\+a-zA-Z0-9_-]+)).*(?:(?:&|\?)ll=(-?\d+\.\d+,-?\d+\.\d+))(?:.*&)*(?:&z=(\d+)).*$/i,
				urlTemplate : "https://maps.google.com/maps?q=URL_ID_0_HERE&ll=URL_ID_1_HERE&z=URL_ID_2_HERE"
			},
			{
				captureGroups : 2,
				capturePattern : /^(?:http|https):\/\/maps\.google\.com\/maps\?(?:.*&)*(?:q=([',\+a-zA-Z0-9_-]+))(?:.*&)*(?:z=(\d+)).*$/i,
				urlTemplate : "https://maps.google.com/maps?q=URL_ID_0_HERE&z=URL_ID_1_HERE"
			}
		]
	},
	{
		domain : "bestbuy.com",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /^(?:http|https):\/\/www\.bestbuy\.com\/site\/(?:.*\/)?([0-9]+\.p).*$/i,
				urlTemplate : "https://www.bestbuy.com/site/URL_ID_0_HERE"
			}
		]
	},
	{
		domain : "audible.com",
		pages :
		[
			{
				captureGroups : 1,
				capturePattern : /	/i,
				urlTemplate : "https://www.audible.com/pd/URL_ID_0_HERE"
			}
		]
	},
	{
		domain : "medium.com",
		pages :
		[
			{
				captureGroups : 2,
				capturePattern : /^https:\/\/(.*)\.medium\.com\/(?:.*-([0-9a-z]+)).*$/i,
				urlTemplate : "https://URL_ID_0_HERE.medium.com/URL_ID_1_HERE"
			}
		]
	},
	{
		domain : "theverge.com",
		pages :
		[
			{
				captureGroups : 4,
				capturePattern : /^https:\/\/www\.theverge\.com\/(\d{4})\/(\d{2})\/(\d{2})\/(\d+).*$/i,
				urlTemplate : "https://www.theverge.com/URL_ID_0_HERE/URL_ID_1_HERE/URL_ID_2_HERE/URL_ID_3_HERE"
			}
		]
	}
];