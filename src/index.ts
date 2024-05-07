import { readFileSync } from 'fs'

const SIZE_MAPPING = {
  A: 4,
  B: 5,
  C: 6,
  D: 7,
}

const parseCsv = (contents: string) =>
  contents
    .split('\n')
    .map(s => s.split(','))
    .map(([id, ...data]) => ({
      id: parseInt(id, 10),
      data: data.flatMap(d => d.split(':'))
    }))

/**
 * Batch the records by ids depending on the maxSize
 */
export default (filename: string, maxSize: number): number[][] => {
  // Reading data from the file and parsing
  // const fileContents = parseCsv(readFileSync(filename, 'ascii'))

  return [[]]
}
