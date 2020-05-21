import * as React from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Box } from "@material-ui/core";
import styled from "styled-components"
import firebase, { db } from '../Firebase';

import { CookieMapModel } from "@models/cookieMap"
import Header from "@molecules/Header"

interface IProps { }

const CookieMap: React.SFC<IProps> = ({ ...props }) => {
  const [cookieMap, setCookieMap] = useState<CookieMapModel>(null);
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();

  async function fetchCookieMap(id: string) {
    const response = await db.collection("cookieMaps").doc(id).get()
    console.log(response)
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const id = query.get("id")
    if (id === null) {
      alert("id not found")
      return history.push("/")
    }
    fetchCookieMap(id)
  })

  return (
    <Wrapper {...props} >
      <Header />
      <Container maxWidth="sm">
        <div>cookie map page</div>
      </Container>
    </Wrapper >
  )
}

export default CookieMap;

const Wrapper = styled.div`
  height: 100%;
`

const FlexToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`