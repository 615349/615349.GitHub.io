import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  max-width: 990px;
  display: flex;
  margin: 30px auto;
  flex-wrap: wrap;
  gap: 6px;
`;

const Name = styled.div`
  display: flex;
  font-size: 24px;
  letter-spacing: -1px;
  padding: 30px;
  text-decoration: none;
  color: hsl(245deg, 100%, 60%);
`;

const Home = () => {
  return (
    <Wrapper>
      <Name>Ben's code sharing</Name>
      <Inner>
        <Section href="array-flatten" text="Array flatten" />
        <Section href="optional" text="TS - Optional" />
        <Section href="url-search-params" text="UrlSearchParams" />
        <Section href="char-count" text="Char count" />
        <Section href="stack" text="Stack" />
        <Section href="queue" text="Queue" />
        <Section href="filter-empty" text="Filter empty" />
        <Section href="fetch-timeout" text="Fetch timeout" />
      </Inner>
    </Wrapper>
  );
};

export default Home;
