"use strict";

var newsPlugin = {};

newsPlugin.settings = {
	name:"nodebb-plugin-vietnamese-slug",
	from: "àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịÌÍỈĨỊòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ",
	to: "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiiiiiiooooooooooooooooouuuuuuuuuuuyyyyy"
};

newsPlugin.init = function(params, callback) {
	console.log(newsPlugin.settings.get("name") + ":init");
	callback();
};

newsPlugin.activate = function(id) {
	if (id === newsPlugin.settings.get("name")) {
		console.log(newsPlugin.settings.get("name") + ":activate");
	}
};

newsPlugin.deactivate = function(id) {
	if (id === newsPlugin.settings.get("name")) {
		console.log(newsPlugin.settings.get("name") + ":deactivate");
	}
};

newsPlugin.createTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

newsPlugin.editTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

var slugify = function (str) {
	if (str == null) return '';
	var regex = new RegExp('[' + newsPlugin.settings.from + ']', 'g');
	str = String(str).toLowerCase().replace(regex, function(c) {
		var index = newsPlugin.settings.from.indexOf(c);
		return newsPlugin.settings.to.charAt(index) || '-';
	});
	return str;
};

module.exports = newsPlugin;
