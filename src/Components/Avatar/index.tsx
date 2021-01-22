import React from 'react'
import { default as MAvatar, AvatarProps } from '@material-ui/core/Avatar'
import './style.scss'

/**
 * @interface Avatar Component IProps
 */
interface IAvatarProps extends AvatarProps {
  wrapperClassName?: string
  title?: string
  caption?: string
  src?: string
}

/**
 * @param props: IAvatarProps
 */
const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  const { wrapperClassName = '', src, title, caption } = props
  return (
    <div className={`join-avatar ${wrapperClassName}`}>
      <MAvatar src={src} />
      {(title || caption) && (
        <div className="join-avatar__meta-container">
          {title && (
            <span className="join-avatar__meta-container_title">{title}</span>
          )}
          {caption && (
            <span className="join-avatar__meta-container_caption">
              {caption}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default Avatar
