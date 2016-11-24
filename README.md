# convert-sbgnml
An npm module that converts xml based Systems Biology Graphical Notation(SBGN) files to javascript objects.

## Requirements
convert-sbgnml assumes that it will be run in the browser using one of (Chrome, Safari, FireFox).

convert-sbgnml also expects that it will be receiving sbgnml files.  You can see some example sbgnml files [here](https://github.com/PathwayCommons/convert-sbgnml/tree/master/test/fixtures/input), and their corresponding output [here](https://github.com/PathwayCommons/convert-sbgnml/tree/master/test/fixtures/output).

It would also be helpful to understand the [SBGN language spec](http://sbgn.github.io/sbgn/).

## Installation
Instal with npm:

```sh
npm install convert-sbgnml
```

## Usage

```js
var convert = require('convert-sbgnml');

var loadXML = function (filename) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhttp.open('GET', filename, false);
  xhttp.send();
  return xhttp.responseXML;
};

var xmlDom = loadXML('sbgnml-file.xml');

var sbgnObj = convert(xmlDom);
```

For a holistic view on how to use this module, take a look at the [example](https://github.com/PathwayCommons/convert-sbgnml/tree/master/example) folder.

## Tests
Run the tests with:
```sh
npm test
```
