import React from 'react'

import ReviewCandidates from './Routes/ReviewCandidates'
import Layout from './Components/Layout'

import './App.scss'

const App = () => (
  <Layout>
    {/*  Best way is to implement this with react router but Maybe add if I could find time */}
    <ReviewCandidates />
  </Layout>
)

export default App
