interface CandidateType {
  avatar: string
  country: string
  createdAt: string
  email: string
  fullName: string
  id: string
  jobLocation: string
  jobTitle: string
  phone: string
  qualified: 'YES' | 'NO' | 'IN_REVIEW'
}

interface GetCandidateType {
  count: number
  items: CandidateType[]
  total: number
}
