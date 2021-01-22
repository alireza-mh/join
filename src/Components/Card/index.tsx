import React from 'react'
import { default as MCard } from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'

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
          <IconButton>
            <ThumbUp style={{ color: 'green' }} />
          </IconButton>
          <IconButton>
            <ThumbDown style={{ color: 'red' }} />
          </IconButton>
        </div>
      </div>
    </MCard>
  )
}

export default Card
