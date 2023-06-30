import Template from "../Template";

const CharCount = () => {
  const code = `
    const charCount = (str: string, char: string) => str.split(char).length - 1;
    // str.split -> [ '', 'l', 'phant' ]
    const str = 'elephant';
    const char = 'e';
    charCount(str, char)
  `;

  return <Template code={code} />;
};

export default CharCount;
