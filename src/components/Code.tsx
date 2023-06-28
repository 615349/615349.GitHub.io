import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import hl from "highlight.js";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 0 auto;
`;

const Code = ({ code }: { code: string }) => {
  useEffect(() => {
    hl.highlightAll();
  }, []);

  return (
    <Wrapper>
      <pre>
        <code className="language-ts">{code}</code>
      </pre>
    </Wrapper>
  );
};

export default Code;
