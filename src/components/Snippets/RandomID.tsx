import { useMemo } from "react";
import styled from "styled-components";
import Template from "../Template";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 990px;
`;

const code = `
  import { useMemo } from "react";

  export default function App() {
    const randomID = useMemo(() => {
      return crypto.randomUUID();
    }, []);
    return <div>Random ID: {randomID}</div>;
  }
`;

export default function RandomID() {
  const randomID = useMemo(() => {
    return crypto.randomUUID();
  }, []);
  return (
    <Template code={code}>
      <Wrapper>Random ID: {randomID}</Wrapper>
    </Template>
  );
}
