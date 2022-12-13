import * as fs from 'fs';
const data = fs.readFileSync('day5/crane.txt','utf8')

function sanitizeData(data: string) {
	let cratesY: Array<string> = [];
	let cratesX: Array<string> = [];
	let cratesZ: Array<string> = [];
	let instructions: Array<string> = [];
	const allCrates = [ cratesY, cratesX, cratesZ ]

	data.split('\n').forEach((crates) => {
		if (crates.length === 11 && crates.charAt(1) !== '1') {
			cratesY.push(crates.slice(0,3))
			cratesX.push(crates.slice(4,7))
			cratesZ.push(crates.slice(8,11))
		}
	})

	cratesY = cratesY.filter((crate) => crate.charAt(0) !== ' ')
	cratesX = cratesX.filter((crate) => crate.charAt(0) !== ' ')
	cratesZ = cratesZ.filter((crate) => crate.charAt(0) !== ' ')

	data.split('\n').forEach((instruction) => {
		if (instruction.charAt(0) === 'm') {
			instructions.push(instruction.replace(/\D/g, ''))
		}
	})

	moveCrates(instructions, allCrates)
}

function moveCrates(instructions: Array<string>, allCrates: Array<Array<string>>) {
	const cloneCrates = Array.from(allCrates);
	instructions.forEach((instruction) => {
		const numberOfCrates = Number(instruction.charAt(0))
		const fromArray = Number(instruction.charAt(1))
		const toArray = Number(instruction.charAt(2))
		let selectedCrates: Array<string>;

		selectedCrates = allCrates[fromArray].splice(0, numberOfCrates)


		// console.log(allCrates[fromArray])
	})

	console.log(cloneCrates)


	// number of crates
	// from array
	// reverse order
	// to array
}

sanitizeData(data)

