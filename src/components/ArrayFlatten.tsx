import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import hl from "highlight.js";
import Code from "./Code";
import Back from "./Back";

const ArrayFlatten = () => {
  useEffect(() => {
    hl.highlightAll();
  }, []);

  const codeStr = `
    const arr = [1, 2, 3, [4, 5, [6, 8], 9]];
    arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 8, 9]
  `;

  return (
    <>
      <Back />
      <Code codeStr={codeStr} />
    </>
  );
};

export default ArrayFlatten;
