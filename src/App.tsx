import * as React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import CookieMap from "@pages/CookieMap"
import Home from '@pages/Home';
import Notfound from '@pages/Notfound';

interface IProps { }

const App: React.SFC<IProps> = ({ ...props }) => {
  console.log(process.env.NODE_ENV)
  const client = new ApolloClient(process.env.NODE_ENV !== 'production' ? {
    uri: "http://localhost:8080/graphql"
  } : {});

  return <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cookieMap" component={CookieMap} />
        <Route path="/notfound" component={Notfound} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
};



export default App;



