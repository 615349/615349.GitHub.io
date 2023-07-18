import Template from "../Template";

const ForForEach = () => {
  const code = `
    const arr = []
    // Create an array with a million elements
    for (let i = 0; i < 100 * 10000; i++) {
      arr.push(i)
    }

    const length = arr.length

    // Use for to walk through the array and print the time
    console.time('for')

    let n1 = 0
    for (let o = 0; o < length; o++) {
      n1++
    }
    console.timeEnd('for') // for: 2.639ms

    // Use forEach to traverse and print the time
    console.time('forEach')
    let n2 = 0
    arr.forEach(() => {
      n2++
    })
    console.timeEnd('forEach') // forEach: 14.059ms
  `;

  return <Template code={code} />;
};

export default ForForEach;
