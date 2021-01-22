import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { CircularProgressbarWrapperProps } from 'react-circular-progressbar/dist/types'
import 'react-circular-progressbar/dist/styles.css'
import './style.scss'

/**
 * @interface ProgressCircle Component IProps
 */
interface IProgressCircleProps extends CircularProgressbarWrapperProps {
  showDescription?: boolean
}

/**
 * @param props: IProgressCircleProps
 */
const ProgressCircle: React.FC<IProgressCircleProps> = (
  props: IProgressCircleProps
) => {
  const {
    value,
    text = `${value}%`,
    styles,
    showDescription = true,
    ...rest
  } = props
  return (
    <div className={'progress-circle'}>
      <CircularProgressbar
        value={value}
        text={text}
        styles={{ trail: { stroke: 'red' } }}
        {...rest}
      />
    </div>
  )
}

export default ProgressCircle
