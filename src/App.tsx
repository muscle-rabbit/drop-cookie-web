import * as React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CookieMap from "@pages/CookieMap"
import Home from '@pages/Home';
import Notfound from '@pages/Notfound';

interface IProps { }

const App: React.SFC<IProps> = ({ ...props }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cookieMap" component={CookieMap} />
      <Route path="/notfound" component={Notfound} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);



export default App;



