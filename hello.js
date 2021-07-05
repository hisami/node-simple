const array = []

const item = {
  contractType: 'test'
}

const matchedItem = storeItem => storeItem.contractType === item.contractType

const itemIndex = array.findIndex(matchedItem)


console.log(itemIndex)