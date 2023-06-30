import Template from "../Template";

const code = `
  function Product1(unitPrice: number, unitNumber: number) {
    this.unitNumber = unitNumber;
    this.unitPrice = unitPrice;
  }
  // how to get the total price

  // method 1
  Product1.prototype.getTotalPrice = function () {
    return this.unitNumber * this.unitPrice;
  }
  const product = new Product1(3, 100);
  product.getTotalPrice(); //300

  // method 2
  Object.defineProperty(Product1.prototype, 'totalPrice', {
    get() {
      return this.unitNumber * this.unitPrice;
    }
  });
  product.totalPrice // 300
`;
export default function AddProperty() {
  return <Template code={code} />;
}
