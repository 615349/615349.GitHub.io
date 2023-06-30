import Template from "../Template";

const code = `
  const obj = {
    a: 1,
    b: 2,
  };

  obj.c = obj;
  //when do deep clone by JSON.stringify & JSON.parse, it will fail
  // JSON.parse(JSON.stringify(obj));  //caught TypeError: Converting circular structure to JSON

  function deepClone(obj) {
    return new Promise((resolve) => {
      const { port1, port2 } = new MessageChannel();
      port1.postMessage(obj);
      port2.onmessage = (msg) => {
        resolve(msg.data);
      }
    })
  }

  const obj1 = {
    a: 1,
    b: 2,
  }
  obj1.c = obj1;
  deepClone(obj1).then(data => {
    console.log(data);
  })
`;
export default function DeepClone() {
  return <Template code={code} />;
}
