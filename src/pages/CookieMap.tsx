import * as React from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Box } from "@material-ui/core";
import { CookieMapVars, GET_COOKIEMAP, CookieMapData, } from "../graphql/cookieMap";
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import Header from "@molecules/Header"
import { CookieMapModel } from '@models/cookieMap';
import Loading from '../components/organisms/Loading';
import CookieMapOrganism from "../components/organisms/CookieMap"

interface IProps { }

const CookieMap: React.SFC<IProps> = ({ ...props }) => {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const id = query.get("id")
  useEffect(() => {
    if (id === null) {
      alert("id not found")
      return history.push("/")
    }
  })
  const { loading, data } = useQuery<CookieMapData, CookieMapVars>(
    GET_COOKIEMAP,
    { variables: { id: id } }
  );

  if (loading) {
    return (
      <Wrapper {...props} >
        <Header />
        <Container maxWidth="sm">
          <Loading />
        </Container>
      </Wrapper >
    )
  }
  return (
    <Wrapper {...props} >
      <Header />
      <Container
        maxWidth="sm"
        className="container"
      >
        <CookieMapOrganism
          cookieMap={data.cookieMap}
        />
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

