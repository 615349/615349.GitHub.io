import Template from "../Template";

const code = `
  /**
   * Add some code to make below code work
   * currently it will report
   * caught TypeError: {(intermediate value)(intermediate value)} is not iterable
   */
  const [a, b] = { a: 1, b: 2 };

  /**
   * actually as long as it is an iterator, the above code would work
   */
  Object.prototype[Symbol.iterator] = function () {
    return Object.values(this)[Symbol.iterator]();
  };
  const [a, b] = { a: 1, b: 2 };
`;
export default function Iterator() {
  return <Template code={code} />;
}
