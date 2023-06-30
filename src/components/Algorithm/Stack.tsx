import Template from "../Template";

const code = `
  class Stack {
    array: Array<number> = [];

    push(element: number) {
      this.array.push(element);
    }

    pop() {
      this.array.pop();
    }

    clear() {
      this.array = [];
    }

    get getArray() {
      return this.array;
    }
  }

  const stack = new Stack();
  stack.push(5);
  stack.push(6);
  stack.pop();

  console.log(stack.getArray) // [5]
`;

export default function Stack() {
  return <Template code={code} />;
}
