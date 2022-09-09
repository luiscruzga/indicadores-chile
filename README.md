# indicadores-chile
It allows to obtain the main economic indicators of Chile

## Installation

Install indicadores-chile with npm

```bash
  npm install indicadores-chile
```

## Usage/Examples

Get all indicators from santander

```javascript
const Indicators = require('indicadores-chile');

Indicators.getIndicators()
.then(data => console.log(data))
.catch(err => console.log(err));

```

Get a specific indicator

```javascript
const Indicators = require('indicadores-chile');

Indicators.getIndicators('dolar')
.then(data => console.log(data))
.catch(err => console.log(err));
```


Response

```javascript
[
  { code: '$', name: 'Dolar', value: '$886,34' },
  { code: '€', name: 'Euro', value: '$885,45' },
  {
    code: 'IPSA',
    name: 'Indice de Precio Selectivo de Acciones',
    value: '5.516,80'
  },
  { code: 'UF', name: 'Unidades de Fomento', value: '$33.958,13' },
  {
    code: 'UTM',
    name: 'Unidad Tributaria Mensual',
    value: '$59.595,00'
  },
  {
    code: 'IPC',
    name: 'Indice de Precios al Consumidor',
    value: '108,50'
  },
  { code: 'TPM', name: 'Tasa de Política Monetaria', value: '%10,75' }
]
```