import styled from "styled-components";
import Code from "../Code";
import Back from "../Back";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 30px auto;
`;

const Title = styled.h2`
  color: #333;
  line-height: 2;
`;

const Span = styled.span`
  background: linear-gradient(to right, #ec695c, #61c454) no-repeat left bottom;
  background-size: 0 2px;
  transition: background-size 1000ms;

  &:hover {
    background-size: 100% 2px;
  }
`;

const code = `
  import styled from "styled-components";

  const Title = styled.h2'
    color: #333;
    line-height: 2;
  ';

  const Span = styled.span'
    background: linear-gradient(to right, #ec695c, #61c454) no-repeat left bottom;
    background-size: 0 2px;
    transition: background-size 1000ms;

    &:hover {
      background-size: 100% 2px;
    }
  ';

  export default function App() {
    return (
      <Title>
        <Span>After 10 years, CSS is still the hardest language to learn</Span>
      </Title>
    );
  }
`;

export default function Underline() {
  return (
    <>
      <Back bottom={30} />
      <Wrapper>
        <Title>
          <Span>
            After 10 years, CSS is still the hardest language to learn
          </Span>
        </Title>
      </Wrapper>
      <Code code={code} />
    </>
  );
}
