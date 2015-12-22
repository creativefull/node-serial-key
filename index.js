var exec = require('child_process').exec;
var platform = process.platform;
var CryptoJS = require("crypto");

module.exports = {
	serial : '',
	getSerial : function(cb) {
		if (platform == 'linux') {
			exec('lsblk --nodeps -o name,serial', function(err, stdout) {
				var output = stdout.split('\n')[1];
				var hasil = output.split(/\s{2,}/)[1].replace(/\s/gi, '');
				this.serial = hasil;
				cb(err, hasil);
			});
		}
		else if (platform == 'win32') {
			exec('wmic path win32_physicalmedia get SerialNumber', function(err, stdout) {
				var output = stdout.split(/\n/)[1].replace(/\s/gi, '');
				this.serial = output;
				cb(err, output);
			})
		}
		else {
			this.serial = "Unkown";
			cb("Platform Not Supported", null)
		}
	},
	isValid : function(data, secret) {
		var hash = CryptoJS.createHash('md5').update(serial + "474MaXCKBt" + secret.toString()).digest('hex').toString().substr(15);
		if (data == hash) {
			return true;
		}
		else {
			return false;
		}
	},
	generateSerial : function(key, secret) {
		var nomor = 331706060498001;
		var hash = CryptoJS.createHash('md5').update(key + "474MaXCKBt" + secret.toString()).digest('hex').toString().substr(15);
		if (key != '' && key != undefined && key != null) {
			return hash;
		}
		else {
			return "Key Not Valid";
		}
	}
}