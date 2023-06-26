import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Inner = styled.div`
  max-width: 990px;
  display: flex;
  gap: 30px;
  margin: 30px auto;
`;

const Home = () => {
  return (
    <Wrapper>
      <Inner>
        <Section href="array-flatten" text="Array flatten" />
      </Inner>
    </Wrapper>
  );
};

export default Home;
