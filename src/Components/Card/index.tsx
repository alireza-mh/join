import React from 'react'
import { default as MCard } from '@material-ui/core/Card'

import ProgressCircle from '../ProgressCircle'
import './style.scss'

/**
 * @interface  Component IProps
 */
interface IProps extends React.HTMLProps<HTMLDivElement> {
  name?: string
  avatarUrl?: string
  progress?: string
}

/**
 * @param props: IProps
 */
const Card: React.FC<IProps> = (props: IProps) => (
  <MCard className="join-card-container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
    dolorem qui. Aperiam eos facilis id laboriosam quidem tempore voluptatem. A
    aliquid asperiores atque eaque explicabo magnam magni minus nam, nostrum,
    perferendis, sapiente veniam voluptates voluptatum? Beatae laborum molestiae
    odio possimus quo. Aperiam delectus dignissimos dolores facere fuga harum
    impedit incidunt iusto, magnam magni molestias nemo, nihil qui quisquam rem
    unde voluptates. Dignissimos dolore labore, laboriosam nemo porro quas quia
    recusandae voluptate. Ab architecto eos, illum incidunt mollitia neque
    provident quae sapiente sint veritatis. Adipisci dicta ea quo sapiente?
    Consequatur cumque distinctio harum minus nam nemo repellat suscipit
    temporibus voluptas.
    {/*  Avoid Dead code script*/}
    <ProgressCircle value={10} />
  </MCard>
)

export default Card
