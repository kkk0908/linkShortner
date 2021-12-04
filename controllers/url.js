const urlController = {}
const UrlModel = require("../models/url")
const commonFunctions = require("../utils/commonFunctions")
const ShortUniqueId = require('short-unique-id');

urlController.createShortLink = async (data) => {

	try {
		let validUrl = await commonFunctions.checkValidUrl(data.longurl)

		if (!validUrl) return { status: 400, message: "Invalid Url!" }

		let existedUrl = await UrlModel.getUrlByLongUrl(data.longurl)

		if (existedUrl) return { status: 200, shorturl: `http://localhost:3000/urls/${existedUrl.shorturl}` }
		data.shorturl = new ShortUniqueId({ length: 10 })();
		let saveddata = await UrlModel.saveUrl(data)

		return { status: 200, shorturl: `http://localhost:3000/urls/${saveddata.shorturl}` }
	} catch (error) {
		console.log(error)
		return { status: 400, message: error.message }
	}

}


urlController.getShortLink = async (shorturl) => {

	try {

		let existedUrl = await UrlModel.getUrlByShortUrl(shorturl)
		if (!existedUrl) return { status: 404, message: "Url Not Found!" }
		return { status: 200, url: existedUrl.longurl }
	} catch (error) {
		console.log(error)
		return { status: 400, message: error.message }
	}

}


module.exports = urlController