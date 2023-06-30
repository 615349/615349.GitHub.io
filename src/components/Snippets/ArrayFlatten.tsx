import Template from "../Template";

const ArrayFlatten = () => {
  const code = `
    const arr = [1, 2, 3, [4, 5, [6, 8], 9]];
    arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 8, 9]
  `;

  return <Template code={code} />;
};

export default ArrayFlatten;
