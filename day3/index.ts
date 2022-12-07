import * as fs from 'fs';
const data = fs.readFileSync('day3/items.txt','utf8')

let items: Array<string>
let priorityItemsValue: number = 0;

function sanitizeData(data: string) {
  items = data.split('\r\n').map((line) => {
    return line;
  })

  findDuplicateItem(items)
}

function findDuplicateItem(items: Array<string>) {
  items.map((item) => {
    const compartmentLength = item.length / 2
    const firstCompartment = item.slice(0, compartmentLength);
    const secondCompartment = item.slice(compartmentLength, compartmentLength * 2);
    const duplicateItem = [ ...firstCompartment].filter((item) => secondCompartment.includes(item) ? item : null)[0]
    priorityItemsValue += getPriority(duplicateItem)
  })
  console.log(priorityItemsValue)
}

function getPriority(duplicateItem: string): number {
  return duplicateItem.toUpperCase() !== duplicateItem ? duplicateItem.charCodeAt(0) - 96 : duplicateItem.charCodeAt(0) - 38
}

sanitizeData(data);
