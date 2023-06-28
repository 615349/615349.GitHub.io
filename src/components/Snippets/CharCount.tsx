import Code from "../Code";
import Back from "../Back";

const CharCount = () => {
  const code = `
    const charCount = (str: string, char: string) => str.split(char).length - 1;
    // str.split -> [ '', 'l', 'phant' ]
    const str = 'elephant';
    const char = 'e';
    charCount(str, char)
  `;

  return (
    <>
      <Back />
      <Code code={code} />
    </>
  );
};

export default CharCount;
