// test = [{ key: 'value' }]

// const hisa = test.find(data => data.key === "valuea") || []

// console.log(hisa)

// const hisa = {}

// console.log(`${hisa.test} ${hisa.test}`)

var array1 = [
  { name: 'taro' },
  { name: 'jiro' },
  { name: 'sabuso' },
];

const array2 = array1.map(arr => { return arr.name }).indexOf('sabuso')

console.log(array1[array2]);

const test = array1.find(test => test.name === 'sabuso')
console.log(test)

const endDate = new Date(2019, 9, 14, 23, 59, 59)

console.log(endDate)