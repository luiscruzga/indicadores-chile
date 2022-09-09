const Xray = require('x-ray');
const cheerio = require('cheerio');
const config = require('./config/config.json');

const getIndicators = (type = '') => {
  return new Promise((resolve, reject) => {
    if (type !== '' && !Object.entries(config.indicators).find(el => 
      el[1].name.toLowerCase() === type.toLocaleLowerCase()
      || el[1].code.toLocaleLowerCase() === type.toLocaleLowerCase()
    )) return reject('Indicator is invalid!');
    const xray = Xray();
    const url = 'https://bancosantanderinversiones.finmarketslive.cl/www/mercados.html';
    xray(url, 'body@html')((error, body) => {
      if (error) return reject(error);
      const $ = cheerio.load(body);
      const indicators = [];
      $('.bandContainer > ul > li').each((i, element) => {
        const item = $(element).find('b').text().trim();
        indicators.push({
          code: config.indicators[item].code,
          name: config.indicators[item].name,
          value: config.indicators[item].prefix + $(element).find('span[data-bind="text: price"]').text().trim()
        });
      });

      resolve(
        type !== ''
        ? indicators.find(el => 
          el.name.toLowerCase() === type.toLocaleLowerCase()
          || el.code.toLocaleLowerCase() === type.toLocaleLowerCase()
        )
        : indicators
      );
    });
  });
}

module.exports = {
  getIndicators
}