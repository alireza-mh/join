import React from 'react'

import Card from '../../Components/Card'
import './style.scss'

/**
 * @interface ReviewCandidates Component IProps
 */
type IReviewCandidatesProps = React.HTMLProps<HTMLDivElement>

/**
 * @param props: IReviewCandidatesProps
 */
const ReviewCandidates: React.FC<IReviewCandidatesProps> = (
  props: IReviewCandidatesProps
) => (
  <div className="join-review-candidates">
    <Card userFullName={'Alireza Mahmoodi'} progress={10} />
  </div>
)

export default ReviewCandidates
