import * as React from "react"
import styled from "styled-components";

interface IProps {
  lat: number
  lng: number
}

const Marker: React.SFC<IProps> = (props) => {
  return (
    <Wrapper className="marker"
    />
  );
};

export default Marker;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #B4986D;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  &:hover {
    z-index: 1;
  }
`