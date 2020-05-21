import * as React from "react"
import styled from "styled-components"
import Header from "@molecules/Header"
import { Container } from '@material-ui/core';

interface IProps { }

const Home: React.SFC<IProps> = () => {
  return (
    <Wrapper>
      <Header />
      <Container maxWidth="sm">
        <h1>home page</h1>
      </Container>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  height: 100%;
`
