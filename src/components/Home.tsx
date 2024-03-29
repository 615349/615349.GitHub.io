import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 100px;
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

const Title = styled.h3`
  max-width: 990px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Wrapper>
      <Name>Ben's code sharing</Name>
      <Title>CSS - a language you'll never master</Title>
      <Inner>
        <Section href="burger-menu" text="Burger menu" />
        <Section href="spot-light" text="Spot light" />
        <Section href="underline" text="Underline" />
        <Section href="blur" text="Blur" />
        <Section href="input-shake" text="Input shake" />
      </Inner>
      <Title>Snippets</Title>
      <Inner>
        <Section href="array-flatten" text="Array flatten" />
        <Section href="url-search-params" text="UrlSearchParams" />
        <Section href="char-count" text="Char count" />
        <Section href="filter-empty" text="Filter empty" />
        <Section href="fetch-timeout" text="Fetch timeout" />
        <Section href="random-id" text="Random ID" />
        <Section href="add-property" text="Object add property" />
        <Section href="deep-clone" text="Deep clone" />
        <Section href="value-of" text="Value of" />
        <Section href="iterator" text="Iterator" />
        <Section href="visibility-change" text="Visibility change" />
        <Section href="chatgpt-style" text="ChatGPT style" />
        <Section href="for-forEach" text="For vs ForEach" />
        <Section href="json-stringify" text="JSON stringify" />
        <Section href="sequence-requests" text="Sequence requests" />
      </Inner>
      <Title>TypeScript</Title>
      <Inner>
        <Section href="optional" text="Optional" />
      </Inner>
      <Title>Algorithm</Title>
      <Inner>
        <Section href="stack" text="Stack" />
        <Section href="queue" text="Queue" />
        <Section href="big-sum" text="Big sum" />
      </Inner>
    </Wrapper>
  );
};

export default Home;
