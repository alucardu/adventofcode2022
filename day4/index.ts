import * as fs from 'fs';
const data = fs.readFileSync('day4/sections.txt','utf8')

function sanitizeData(data: string): void {
	const sanitizedData = data.split('\n').map((line) => line.split(',')).map((line) => line.map((line) => line.split('-').map(Number)))
	const partOverlappingSections = sanitizedData.filter((section) => {
		const [[firstStart, firstEnd], [secondStart, secondEnd]] = section;
		if ((firstStart <= secondEnd && firstEnd >= secondStart) || (secondStart <= firstEnd && secondEnd >= firstStart)) return section
	})

	const overlappingSections = sanitizedData.filter((section) => {
		const [[firstStart, firstEnd], [secondStart, secondEnd]] = section;
		if ((firstStart <= secondStart && firstEnd >= secondEnd) || (secondStart <= firstStart && secondEnd >= firstEnd)) return section
	})
	console.log(overlappingSections.length, partOverlappingSections.length)
}

sanitizeData(data)