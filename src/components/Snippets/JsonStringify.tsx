import Template from "../Template";

const JsonStringify = () => {
  const code = `
    const person = {
      name: "John",
      age: 24,
      passport: 'PB2121211',
    }

    // don't want to disclose passport number when do JSON.stringify
    JSON.stringify(person, ["name", "age"])
    // '{"name":"John","age":24}'
  `;

  return <Template code={code} />;
};

export default JsonStringify;
