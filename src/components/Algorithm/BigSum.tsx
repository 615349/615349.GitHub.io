import Template from "../Template";

const code = `
  const bigSum = (a: string, b: string) => {
    const len = Math.max(a.length, b.length);
    const _a = a.padStart(len, "0");
    const _b = b.padStart(len, "0");

    let result = "";
    let carry: number = 0;
    for (let i = len - 1; i >= 0; i--) {
      const sum = Number(_a[i]) + Number(_b[i]);
      carry = Math.floor(sum / 10);
      result = (sum % 10).toString() + result;
    }

    if (carry) {
      result = "1" + result;
    }

    return result;
  };

  console.log(bigSum("111111111", "222222222"));
`;

export default function BigSum() {
  return <Template code={code} />;
};
