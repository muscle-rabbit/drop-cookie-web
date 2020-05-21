import * as React from "react"
import CookieMap from "./CookieMap"
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Box } from "@material-ui/core";
import styled from "styled-components"

interface IProps {
}

const App: React.SFC<IProps> = ({ ...props }) => (
  <Wrapper {...props} className="fafd">
    <AppBar position="static" >
      <Container maxWidth="sm">
        <FlexToolbar >
          <Typography variant="h6" >
            Cookie Map
          </Typography>
        </FlexToolbar>
      </Container>
    </AppBar>
    <Container maxWidth="sm">
      <CookieMap />
    </Container>
  </Wrapper >
);

export default App;

const Wrapper = styled.div`
  height: 100%;
`

const FlexToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`

