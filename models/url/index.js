// eslint-disable-next-line no-unused-vars
const Url = require("./urlModel");

exports.saveUrl = (data) => Url.create(data)

exports.getUrlByLongUrl = (longurl) => Url.findOne({ longurl })

exports.getUrlByShortUrl = (shorturl) => Url.findOne({ shorturl })

