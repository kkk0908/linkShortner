var express = require('express');
var router = express.Router();
const urlsControllers = require("../controllers/url")

router.post('/', (req, res) => {
	urlsControllers.createShortLink(req.body).then(result => res.status(result.status).json(result),
		err => res.status(err.status).json(err)
	)
})

router.get('/:id', (req, res) => {
	urlsControllers.getShortLink(req.params.id).then(result => res.redirect(result.url),
		err => res.status(err.status).json(err)
	)
})

module.exports = router;