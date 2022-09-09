const Indicators = require('../src/index');

Indicators.getIndicators('euro')
.then(data => console.log(data))
.catch(err => console.log(err));