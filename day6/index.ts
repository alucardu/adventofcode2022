import * as fs from 'fs';
const data = fs.readFileSync('day6/input.txt','utf8')

function parseInput(data: string): void {
	for (let index = 0; index < data.length; index++) {
		const something = [...data].slice(index, index + 4)

		const x = something.some((item, index) => {
			return something.indexOf(item) !== index
		})

		if (!x) {
			console.log('UNDEFINED', index + 4)
			return
		}

	}
}

parseInput(data);