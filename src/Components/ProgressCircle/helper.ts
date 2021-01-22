/* Maybe Later we could add this helper in new directory named utils but for now ... */

// eslint-disable-next-line no-shadow
enum Level {
  'BAD' = 'BAD',
  'GOOD' = 'GOOD',
  'EXCELENT' = 'EXCELENT',
}
export const findCompleteLevel = (progress: number) => {
  if (progress >= 70) {
    return Level.EXCELENT
  }
  if (progress >= 50) {
    return Level.GOOD
  }
  return Level.BAD
}

export const mapObject: Record<Level, { color: string; label: string }> = {
  [Level.BAD]: { color: 'red', label: 'Good' },
  [Level.GOOD]: { color: 'green', label: 'Could be better' },
  [Level.EXCELENT]: { color: 'blue', label: 'Excelent' },
}
