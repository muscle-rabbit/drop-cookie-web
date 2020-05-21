import * as React from "react"
import { Button } from "@material-ui/core"

interface IProps { }

const CookieMap: React.SFC<IProps> = ({ ...props }) => (
  <div {...props}>
    <Button>Hello</Button>
  </div>
);

export default CookieMap;