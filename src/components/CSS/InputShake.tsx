import styled from "styled-components";
import Template from "../Template";

const FormInput = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 30px;
  padding: 0 6px;
  @keyframes shake {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 8px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -8px;
    }
    100% {
      margin-left: 0;
    }
  }

  &:invalid {
    color: red;
    border: 1px solid red;
    animation: shake 0.2s ease-in-out 0s 2;
    &:focus {
      outline:1px solid red;
    }
  }
`;

const code = `
  import styled from "styled-components";

  const FormInput = styled.div'
    width: 300px;
    margin: 0 auto;
  ';

  const Input = styled.input'
    height: 30px;
    padding: 0 6px;
    @keyframes shake {
      0% {
        margin-left: 0;
      }
      25% {
        margin-left: 8px;
      }
      50% {
        margin-left: 0;
      }
      75% {
        margin-left: -8px;
      }
      100% {
        margin-left: 0;
      }
    }

    &:invalid {
      color: red;
      border: 1px solid red;
      animation: shake 0.2s ease-in-out 0s 2;
      &:focus {
        outline:1px solid red;
      }
    }
  ';

  // line 31, the last param 2 means shake twice

  export default function App() {
    return (
      <FormInput>
        <Input placeholder="Please input number" pattern="[0-9]*" />
      </FormInput>
    );
  }
`;

export default function InputShake() {
  return (
    <Template code={code}>
      <FormInput>
        <Input placeholder="Please input number" pattern="[0-9]*" />
      </FormInput>
    </Template>
  );
}
