import * as React from "react"
import { Container, CircularProgress } from "@material-ui/core"

interface IProps { }

const Loading: React.SFC<IProps> = ({ }) => (
  <CircularProgress />
)

export default Loading
