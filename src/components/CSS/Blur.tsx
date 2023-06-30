import styled from "styled-components";
import Template from "../Template";

const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  background-color: #000;
  filter: contrast(30);
`;

const Text = styled.div`
  font-size: 100px;
  color: #fff;
  animation: showup 3s infinite;

  @keyframes showup {
    from {
      letter-spacing: -50px;
      filter: blur(10px);
    }
    to {
      letter-spacing: 10px;
      filter: blur(2px);
    }
  }
`;

const code = `
  import styled from "styled-components";

  const Container = styled.div'
    margin-top: 50px;
    text-align: center;
    background-color: #000;
    filter: contrast(30);
  ';

  const Text = styled.div'
    font-size: 100px;
    color: #fff;
    animation: showup 3s infinite;

    @keyframes showup {
      from {
        letter-spacing: -50px;
        filter: blur(10px);
      }
      to {
        letter-spacing: 10px;
        filter: blur(2px);
      }
    }
  ';

  export default function App() {
    return (
      <Container>
        <Text>Hello World</Text>
      </Container>
    );
  }
`;

export default function Blur() {
  return (
    <Template code={code}>
      <Container>
        <Text>Hello World</Text>
      </Container>
    </Template>
  );
}
