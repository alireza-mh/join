import React from 'react'
import { default as MCard } from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import Close from '@material-ui/icons/Close'

import { Qualified } from '../../constants/enums'
import ProgressCircle from '../ProgressCircle'
import { primaryDateFormat } from '../../utils/dateFormat'
import Avatar from '../Avatar'
import './style.scss'

/**
 * @interface  Component IProps
 */
interface IProps extends React.HTMLProps<HTMLDivElement> {
  avatarUrl?: string
  progress?: number
  userLocation?: string
  userFullName: string
  jobTitle?: string
  wrapperClassName?: string
  creatAt?: string
  jobLocation?: string
  candidateState?: CandidateType['qualified']
  onQualify: () => void
  onReject: () => void
  onReview: () => void
}

/**
 * @param props: IProps
 */
const Card: React.FC<IProps> = (props: IProps) => {
  const {
    progress,
    avatarUrl,
    userFullName,
    userLocation,
    jobTitle,
    jobLocation,
    creatAt,
    candidateState,
    onQualify,
    onReject,
    onReview,
    wrapperClassName = '',
  } = props
  return (
    <MCard className={`join-card-container ${wrapperClassName}`}>
      <div className="join-card__applied-info">
        <span>
          Applied on {creatAt && primaryDateFormat(creatAt)} for{' '}
          {
            <span className="join-card__applied-info_job-title">
              {jobTitle}
            </span>
          }
          {jobLocation && ` (${jobLocation})`}
        </span>
      </div>
      <div className="join-card-content">
        <Avatar
          wrapperClassName="join-card-content__avatar"
          src={avatarUrl}
          title={userFullName}
          caption={userLocation}
        />
        {progress && <ProgressCircle value={progress} />}
        <div className="join-card-content__actions">
          {candidateState !== Qualified.NO && (
            <IconButton
              className="join-card-content__actions_qualified"
              onClick={onQualify}
            >
              <ThumbUp style={{ color: 'green' }} />
              {candidateState === Qualified.IN_REVIEW && <span>Qualified</span>}
            </IconButton>
          )}
          {candidateState !== Qualified.YES && (
            <IconButton
              className="join-card-content__actions_not_qualified"
              onClick={onReject}
            >
              <ThumbDown style={{ color: 'red' }} />
              {candidateState === Qualified.IN_REVIEW && (
                <span>Not qualified</span>
              )}
            </IconButton>
          )}
          {candidateState !== Qualified.IN_REVIEW && (
            <IconButton
              className="join-card-content__actions_cancel"
              onClick={onReview}
            >
              <Close style={{ color: 'gray' }} />
            </IconButton>
          )}
        </div>
      </div>
    </MCard>
  )
}

export default Card
