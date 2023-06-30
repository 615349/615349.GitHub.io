import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  a {
    font-size: 18px;
    line-height: 24px;
    padding-left: 10px;
  }
`;

const Back = () => {
  return (
    <Wrapper>
      <Link to="/">&lt; Back</Link>
    </Wrapper>
  );
};

export default Back;
