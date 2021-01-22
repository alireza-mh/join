import { BASE_URL_API } from '../constants'
export const getCandidate = () =>
  fetch(`${BASE_URL_API}/candidates`).then((res) => res.json())
