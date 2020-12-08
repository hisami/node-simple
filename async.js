async function timeout(ms) {
  // return new Promise(resolve => setTimeout(resolve, ms));
  return new Promise(resolve => setTimeout(() => { resolve('aaaa') }, ms));
}

async function main1() {
  await timeout(5000).then(value => { console.log(value) })
  return 0
}

async function main2() {
  await main1()
  console.log('終了')
}

main2()