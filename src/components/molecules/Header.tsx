import * as React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Box } from "@material-ui/core";
import styled from "styled-components";

interface IProps { }

const Header: React.SFC<IProps> = () => {
  return (<AppBar position="static" >
    <Container maxWidth="sm">
      <FlexToolbar >
        <Typography variant="h6" >
          Cookie Map
  </Typography>
      </FlexToolbar>
    </Container>
  </AppBar>
  )
}

export default Header

const FlexToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`