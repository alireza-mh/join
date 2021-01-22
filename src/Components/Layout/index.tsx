import React from 'react'
import Container from '@material-ui/core/Container'
import './style.scss'

/**
 * @interface Layout Component IProps
 */
interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {
  Header?: React.ReactNode
  Footer?: React.ReactNode
}

/**
 * @param props: ILayoutProps
 */
const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const { Header, Footer, children } = props
  return (
    <div className="join-layout">
      {Header && <header>{Footer}</header>}
      {children && <Container>{children}</Container>}
      {Footer && <footer>{Footer}</footer>}
    </div>
  )
}

export default Layout
