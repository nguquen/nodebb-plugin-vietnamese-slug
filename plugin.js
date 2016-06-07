"use strict";

var slugPlugin = {};

slugPlugin.settings = {
	name:"nodebb-plugin-vietnamese-slug",
	from: "àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịÌÍỈĨỊòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ",
	to: "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiiiiiiooooooooooooooooouuuuuuuuuuuyyyyy"
};

slugPlugin.init = function(params, callback) {
	console.log(slugPlugin.settings.name + ":init");
	callback();
};

slugPlugin.activate = function(id) {
	if (id === slugPlugin.settings.name) {
		console.log(slugPlugin.settings.name + ":activate");
	}
};

slugPlugin.deactivate = function(id) {
	if (id === slugPlugin.settings.name) {
		console.log(slugPlugin.settings.name + ":deactivate");
	}
};

slugPlugin.createTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

slugPlugin.editTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

var slugify = function (str) {
	if (str == null) return '';
	var regex = new RegExp('[' + slugPlugin.settings.from + ']', 'g');
	str = String(str).toLowerCase().replace(regex, function(c) {
		var index = slugPlugin.settings.from.indexOf(c);
		return slugPlugin.settings.to.charAt(index) || '-';
	});
	return str;
};

module.exports = slugPlugin;
