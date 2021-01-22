import { computeCompleteness } from '../../utils/computeCompleteness'
const candidate: Partial<CandidateType> = {
  fullName: 'John Doe',
  email: 'jd@gmail.com',
  qualified: 'YES',
  phone: '981242225',
  country: 'Germany',
  avatar: 'imageUrlMock',
}
/* Test of Full info candidate */
test('candidate full info show return 100', () => {
  expect(computeCompleteness(candidate)).toBe(100)
})

/* Test of No phone */
test('Candidate full info except phone', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.phone
  expect(computeCompleteness(tempCandidate)).toBe(80)
})

/* Test of No Country only */
test('Candidate full info except country', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.country
  expect(computeCompleteness(tempCandidate)).toBe(90)
})

/* Test of No Country no Phone */
test('Candidate full info except phone and country', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.phone
  delete tempCandidate.country
  expect(computeCompleteness(tempCandidate)).toBe(70)
})

/* Test of No Avatar */
test('Candidate full info except Avatar', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.avatar
  expect(computeCompleteness(tempCandidate)).toBe(50)
})

/* Test of No Avatar No Phone */
test('Candidate full info except Avatar and Phone', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.avatar
  expect(computeCompleteness(tempCandidate)).toBe(30)
})

/* Test of No fullName */
test('Candidate full info except fullName', () => {
  const tempCandidate = { ...candidate }
  delete tempCandidate.fullName
  expect(computeCompleteness(tempCandidate)).toBe(90)
})

/* Test of Nothing */
test('Candidate No info', () => {
  expect(computeCompleteness({})).toBe(0)
})
