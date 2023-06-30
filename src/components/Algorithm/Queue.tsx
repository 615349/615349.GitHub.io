import Template from "../Template";

const Queue = () => {
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

  return <Template code={code} />;
};

export default Queue;
