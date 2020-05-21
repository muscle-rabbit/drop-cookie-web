import * as React from "react"
import { Container } from '@material-ui/core';

interface IProps { }

const Notfound: React.SFC<IProps> = () => {
  return (
    <Container>
      <h1>not found</h1>
    </Container>
  )
}

export default Notfound