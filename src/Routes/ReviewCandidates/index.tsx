import React from 'react'
import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress'

import Card from '../../Components/Card'
import { computeCompleteness } from '../../utils/computeCompleteness'
import { getCandidate } from '../../api'
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
) => {
  const { data, error } = useSWR<GetCandidateType>('/api/candidate', () =>
    getCandidate()
  )

  return (
    <div className="join-review-candidates">
      {!data && (
        <div className="join-review-candidates__loading">
          <CircularProgress />
        </div>
      )}
      {data &&
        data.items.map((candidate) => (
          <Card
            key={candidate.id}
            avatarUrl={candidate.avatar}
            userFullName={candidate.fullName}
            userLocation={candidate.country}
            jobTitle={candidate.jobTitle}
            progress={computeCompleteness(candidate)}
            creatAt={candidate.createdAt}
            jobLocation={candidate.jobLocation}
            wrapperClassName={'join-review-candidates__card'}
          />
        ))}
    </div>
  )
}

export default ReviewCandidates
