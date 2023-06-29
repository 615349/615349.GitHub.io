import styled from "styled-components";
import Code from "../Code";
import Back from "../Back";

const Wrapper = styled.div`
  background-color: grey;
  text-align: center;
`;

const H1 = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 48px;
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: attr(title);
    color: #fff;
    animation: spotlight 3s ease-in-out infinite alternate;
  }
  @keyframes spotlight {
    0% {
      clip-path: ellipse(32px 32px at 0% 50%);
    }
    100% {
      clip-path: ellipse(32px 32px at 100% 50%);
    }
  }
`;

const code = `
import styled from "styled-components";

const Wrapper = styled.div'
  background-color: grey;
  text-align: center;
';

const H1 = styled.h1'
  position: relative;
  display: inline-block;
  font-size: 48px;
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: attr(title);
    color: #fff;
    animation: spotlight 3s ease-in-out infinite alternate;
  }
  @keyframes spotlight {
    0% {
      clip-path: ellipse(32px 32px at 0% 50%);
    }
    100% {
      clip-path: ellipse(32px 32px at 100% 50%);
    }
  }
';
const title = 'Hello World';
export default function App() {
  return (
    <Wrapper>
      <H1 title={title}>{title}</H1>
    </Wrapper>
  );
}
`;

const title = "Hello World";
export default function SpotLight() {
  return (
    <>
      <Back bottom={30} />
      <Wrapper>
        <H1 title={title}>{title}</H1>
      </Wrapper>
      <Code code={code} />
    </>
  );
}
