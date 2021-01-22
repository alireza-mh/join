import React, { useCallback, useState } from 'react'
import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress'
import cloneDeep from 'lodash/cloneDeep'

import { Qualified } from '../../constants/enums'
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
  /* create some store to manipulate data */
  const [store, setStore] = useState<GetCandidateType>()
  /* only fill store if it's value is null */
  if (!store?.count && data) {
    setStore(data)
  }
  const handleQualify = useCallback(
    (id: string, Qualify: Qualified) => () => {
      if (store) {
        const dataTemp = cloneDeep(store)
        /* could be more optimal but I am in rush :) */
        dataTemp.items = dataTemp.items.map((candidate) => {
          if (candidate.id === id) {
            candidate.qualified = Qualify
            return candidate
          }
          return candidate
        })
        setStore(dataTemp)
      }
    },
    // eslint-disable-next-line
    [store]
  )
  return (
    <div className="join-review-candidates">
      {!store && !error && (
        <div className="join-review-candidates__loading">
          <CircularProgress />
        </div>
      )}
      {store &&
        store.items.map((candidate) => (
          <Card
            wrapperClassName={'join-review-candidates__card'}
            key={candidate.id}
            avatarUrl={candidate.avatar}
            userFullName={candidate.fullName}
            userLocation={candidate.country}
            jobTitle={candidate.jobTitle}
            progress={computeCompleteness(candidate)}
            creatAt={candidate.createdAt}
            jobLocation={candidate.jobLocation}
            candidateState={candidate.qualified}
            onQualify={handleQualify(candidate.id, Qualified.YES)}
            onReject={handleQualify(candidate.id, Qualified.NO)}
            onReview={handleQualify(candidate.id, Qualified.IN_REVIEW)}
          />
        ))}
      {error && <div>Something went wrong!! try again later</div>}
    </div>
  )
}

export default ReviewCandidates
