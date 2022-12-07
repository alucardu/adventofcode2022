import * as fs from 'fs';
const data = fs.readFileSync('day3/items.txt','utf8')

let items: Array<string>

function sanitizeData(data: string) {
  items = data.split('\r\n').map((line) => {
    return line;
  })

  priorityItemsValue(items)
  badgesValue(items)
}

function priorityItemsValue(items: Array<string>) {
  let priorityItemsValue = 0;

  items.map((item) => {
    const compartmentLength = item.length / 2
    const firstCompartment = item.slice(0, compartmentLength);
    const secondCompartment = item.slice(compartmentLength, compartmentLength * 2);
    const duplicateItem = [ ...firstCompartment].filter((letter) => secondCompartment.includes(letter) ? letter : null)[0]
    priorityItemsValue += getPriority(duplicateItem)
  })
  console.log(priorityItemsValue)
}

function badgesValue(items: Array<string>) {
  const elfGroup = 3;
  let priorityItemsValue = 0;
  let allElfGroups: Array<Array<string>> = []
  let groupOfElves: Array<string> = [];

  items.map((elf, i) => {
    i++
    groupOfElves.push(elf)
    if (i % elfGroup === 0) {
      allElfGroups.push(groupOfElves)
      groupOfElves = []
    }
  })

  allElfGroups.map((elfGroup) => {
    const badge = elfGroup.map((elf) => [...elf].filter((elfLetter) => elfGroup[0].includes(elfLetter) && elfGroup[1].includes(elfLetter) && elfGroup[2].includes(elfLetter) ? elfLetter : null)[0])[0]
    priorityItemsValue += getPriority(badge)
  })
  console.log(priorityItemsValue)
}

function getPriority(duplicateItem: string): number {
  return duplicateItem.toUpperCase() !== duplicateItem ? duplicateItem.charCodeAt(0) - 96 : duplicateItem.charCodeAt(0) - 38
}

sanitizeData(data);
