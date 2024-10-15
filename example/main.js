var convert = require('../dist/sbgnml-to-cytoscape.js');

var getText = function (fname) {
  fetch(fname).then(function (res) {
    console.log('here');
    return res.text();
  }).then(function (data) {
    var cyGraph = convert(data);
    console.log(toJson(cyGraph));
    return data;
  });
};

var toJson = function (obj) {
  return JSON.stringify(obj, null, 4);
};

var xmlText = getText('transforming_growth_factor_beta_signaling.sbgn');


/* var cyGraph = convert(xmlText);
console.log(cyGraph); */
