import Template from "../Template";
import Description from "../Template/Description";

const FilterEmpty = () => {
  const code = `
    const array = [{ a: 3 }, null, 'abc', undefined, 234, '', 'OK'];
    array.filter(Boolean);
    // [{ a: 3 }, 'abc', 234, 'OK'];
  `;

  return (
    <Template code={code}>
      <Description>
        The filter(Boolean) step does the following: 1, Passes each item in the
        array to the Boolean() object 2, The Boolean() object coerces each item
        to true or false depending on whether it's truthy or falsy 3, If the
        item is truthy, we keep it
      </Description>
    </Template>
  );
};

export default FilterEmpty;
