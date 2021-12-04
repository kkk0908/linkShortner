const commonFunctions = {}

commonFunctions.checkValidUrl = async (url) => {
	var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
	if (!regex.test(url)) {
		return false;
	} else {
		return true;
	}
}

module.exports = commonFunctions