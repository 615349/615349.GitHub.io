import Code from "../Code";
import Back from "../Back";

const ArrayFlatten = () => {
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
