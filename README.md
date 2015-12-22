# node-serial-key
SERIAL NUMBER FOR NODE APPLICATION

install module
```
npm install node-serial-key
```

Very easy to use this module
```
var serial = require('node-serial-key');
```

first you must execute this function before run other function
```
serial.getSerial(function(err, output) {
	//// GET SERIAL NUMBER ON DEVICE ////
	console.log(output);	
})
```

To generate serial number for secure your application
```
var genSerial = serial.generateSerial(output, 'yoursecrethere');
console.log(genSerial);
```

To validate your serial number true or false
```
var validSerial = serial.isValid(yourGenerateKey, 'yoursecrethere');
if (validSerial == true) {
	//// DO SOMETHING IF SERIAL NUMBER IS TRUE /////
}
else {
	//// DO SOMETHING IF SERIAL NUMBER IS FALSE /////
}
```

This module not working on Mac-OS . if you have any idea for this module you can contribute in here

Supported : (tangituru.com)