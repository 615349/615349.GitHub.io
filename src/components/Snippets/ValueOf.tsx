import Template from "../Template";

const code = `
  const a = {
    n: 1,
    valueOf(){
      return this.n++;
    }
  }

  a == 1 && a == 2 && a == 3 //true
`;
export default function ValueOf() {
  return <Template code={code} />;
}
