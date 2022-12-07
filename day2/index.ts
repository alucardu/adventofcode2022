import * as fs from 'fs';
const data = fs.readFileSync('rps.txt','utf8')

type match = {
  opponent: string,
  you: string
}

function getChoice(choice: string): string {
  switch (choice) {
    case 'A':
      return 'rockX'
    case 'B':
      return 'paperY'
    case 'C':
      return 'scissorsZ'
    case 'X':
      return 'rockX'
    case 'Y':
      return 'paperY'
    case 'Z':
      return 'scissorsZ'
  }
  return 'airplane'
}

function createMatchArray(): void {
  let matches = data.split('\r\n').map((line) => {
    return {
      opponent: line.slice(0, 1),
      you: line.slice(2, 3),
    };
  })

  matches = matches.map((match) => {
    return {
      opponent: getChoice(match.opponent),
      you: getChoice(match.you),
    }
  })

  playMatches(matches)
}

let points: number = 0;
let secondPoints: number = 0;

// rockX beats scissorsZ
// paperY beats rockX
// scissorsZ beats paperY

// X/rockX : lose,      1
// Y/paperY: draw,      2
// Z/scissorsZ: win     3

// win  6 + points
// draw 3 + points
// lose 0 + points

function playMatches(matches: Array<match>) {
  matches.forEach((match) => {
    playMatch(match)
  })
  console.log(points)


  matches.forEach((match) => {
    playSecondMatch(match)
  })
  console.log(secondPoints)
}

function playMatch(match: match): void {
  switch (match.opponent) {
    case 'rockX':
      if (match.you === 'rockX') {
        points += 4;
      }

      if (match.you === 'paperY') {
        points += 8;
      }

      if (match.you === 'scissorsZ') {
        points += 3;
      }
      break;
    case 'paperY':
      if (match.you === 'rockX') {
        points += 1;
      }

      if (match.you === 'paperY') {
        points += 5;
      }

      if (match.you === 'scissorsZ') {
        points += 9;
      }
      break;
    case 'scissorsZ':
      if (match.you === 'rockX') {
        points += 7;
      }

      if (match.you === 'paperY') {
        points += 2;
      }

      if (match.you === 'scissorsZ') {
        points += 6;
      }
      break;
  }
}

function playSecondMatch(match: match): void {
  switch (match.opponent) {
    case 'rockX':
      if (match.you === 'rockX') {
        secondPoints += 3;
      }

      if (match.you === 'paperY') {
        secondPoints += 4;
      }

      if (match.you === 'scissorsZ') {
        secondPoints += 8;
      }
      break;
    case 'paperY':
      if (match.you === 'rockX') {
        secondPoints += 1;
      }

      if (match.you === 'paperY') {
        secondPoints += 5;
      }

      if (match.you === 'scissorsZ') {
        secondPoints += 9;
      }
      break;
    case 'scissorsZ':
      if (match.you === 'rockX') {
        secondPoints += 2;
      }

      if (match.you === 'paperY') {
        secondPoints += 6;
      }

      if (match.you === 'scissorsZ') {
        secondPoints += 7;
      }
      break;
    }
}

createMatchArray();
