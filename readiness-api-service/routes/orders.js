const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
"type": "array",
"minItems": 1,
"maxItems": 5,
"items":{
type:'object',
properties: {
name: {
type: 'string',
faker: 'name.firstName'
},
status: {
type: 'boolean',
faker: 'random.boolean'
},
age: {
type: 'integer',
chance: 'age'
},
time: {
type: 'integer',
chance: 'second'
}
},
required: ['status', 'name', 'age']
}
};











/* GET users listing. */
router.get('/', (req, res) => {

jsf.resolve(schema).then(sample => {
    //res.render('orders', { sampleOrders :sample});
    res.send(sample);
});
});





// res.send([
// {"name": faker.name.firstName(),
// "status": faker.random.boolean(),
// "age": chance.age({ type: 'adult' }),
// "time":chance.second()
// },
// { "name": faker.name.firstName(),
// "status": faker.random.boolean(),
// "age": chance.age({ type: 'teen' }),
// "time":chance.second()
// }
// ]);
// });

module.exports = router;
