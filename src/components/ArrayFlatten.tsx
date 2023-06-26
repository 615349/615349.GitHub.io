import React, { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import hl from "highlight.js";
import Code from "./Code";
import Back from "./Back";

const ArrayFlatten = () => {
  useEffect(() => {
    hl.highlightAll();
  }, []);

  const code = `
    const arr = [1, 2, 3, [4, 5, [6, 8], 9]];
    arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 8, 9]
  `;

  return (
    <>
      <Back />
      <Code code={code} />
    </>
  );
};

export default ArrayFlatten;
