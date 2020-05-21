import * as React from "react"

interface IProps {
  content: string
}

const App: React.SFC<IProps> = ({ content, ...props }) => (
  <h1 {...props}>{content}</h1>
);

export default App;