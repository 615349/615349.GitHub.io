import Template from "../Template";

const code = `
  class Queue {
    array: Array<number> = [];

    push(element: number) {
      this.array.push(element);
    }

    pop() {
      this.array.shift();
    }

    isEmpty() {
      return this.array.length === 0;
    }

    length() {
      return this.array.length;
    }

    peek() {
      return this.isEmpty() ? undefined : this.array[this.length() - 1];
    }

    get getArray() {
      return this.array;
    }
  }


  const queue = new Queue();

  queue.push(4);
  queue.push(5);
  queue.pop();
`;

export default function Queue() {
  return <Template code={code} />;
};
