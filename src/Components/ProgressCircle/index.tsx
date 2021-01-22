import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { CircularProgressbarWrapperProps } from 'react-circular-progressbar/dist/types'

import { findCompleteLevel, mapObject } from './helper'
import 'react-circular-progressbar/dist/styles.css'
import './style.scss'

/**
 * @interface ProgressCircle Component IProps
 */
interface IProgressCircleProps extends CircularProgressbarWrapperProps {
  showDescription?: boolean
  wrapperClassName?: string
}

/**
 * @param props: IProgressCircleProps
 */
const ProgressCircle: React.FC<IProgressCircleProps> = (
  props: IProgressCircleProps
) => {
  const {
    wrapperClassName = '',
    value,
    text = `${value}%`,
    styles,
    showDescription = true,
    ...rest
  } = props
  const titleAndColorObj = mapObject[findCompleteLevel(value)]
  return (
    <div className={`join-progress-circle-container ${wrapperClassName}`}>
      <CircularProgressbar
        value={value}
        text={text}
        className="join-progress-circle-container__progress"
        styles={{
          trail: { stroke: 'lightgrey' },
          path: { stroke: titleAndColorObj.color },
        }}
        {...rest}
      />
      {showDescription && (
        <div className="join-progress-circle-container__description">
          <span className="join-progress-circle-container__title">
            Application score
          </span>
          <span>{titleAndColorObj.label}</span>
        </div>
      )}
    </div>
  )
}

export default ProgressCircle
