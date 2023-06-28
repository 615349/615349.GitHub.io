import styled from "styled-components";

import { Link } from "react-router-dom";

type BackType = {
  bottom?: number;
};

const Wrapper = styled.div<{ bottom?: number }>`
  height: 64px;
  display: flex;
  align-items: center;
  background-color: rgb(244, 244, 244);
  border-top: 1px solid rgb(204, 204, 204);
  border-bottom: 1px solid rgb(204, 204, 204);
  margin-bottom: ${({ bottom }) => bottom ?? 0}px;

  a {
    font-size: 18px;
    line-height: 24px;
    padding-left: 10px;
  }
`;

const Back = ({ bottom }: BackType) => {
  return (
    <Wrapper bottom={bottom}>
      <Link to="/">&lt; Back</Link>
    </Wrapper>
  );
};

export default Back;
