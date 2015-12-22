var serial = require('./index');

serial.getSerial(function(err, hasil) {
 // var generate = serial.generateSerial(hasil);
	var generate = serial.generateSerial(hasil,"muzaki")
	var hasil = serial.isValid(generate,"muzaki");
	console.log(generate, hasil);
})
