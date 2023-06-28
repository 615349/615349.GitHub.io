import styled from "styled-components";
import Code from "../Code";
import Back from "../Back";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 30px auto;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  width: 40px;
  cursor: pointer;
  &:hover {
    .top {
      transform: rotate(45deg);
    }
    .middle {
      width: 0;
      opacity: 0;
    }
    .bottom {
      transform: rotate(-45deg);
    }
  }
`;

const Bar = styled.div`
  height: 5px;
  background: #000;
  border-radius: 5px;
  margin: 3px 0;
  transform-origin: left;
  transition: all 0.5s;
  width: 100%;
`;

const code = `
  const Menu = styled.div'
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    width: 40px;
    cursor: pointer;
    &:hover {
      .top {
        transform: rotate(45deg);
      }
      .middle {
        width: 0;
        opacity: 0;
      }
      .bottom {
        transform: rotate(-45deg);
      }
    }
  ';

  const Bar = styled.div'
    height: 5px;
    background: #000;
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all 0.5s;
    width: 100%;
  ';

  export default function App() {
    return (
      <Menu>
        <Bar className="top" />
        <Bar className="middle" />
        <Bar className="bottom" />
      </Menu>
    );
  }
`;

export default function BurgerMenu() {
  return (
    <Wrapper>
      <Back bottom={30} />

      <Menu>
        <Bar className="top" />
        <Bar className="middle" />
        <Bar className="bottom" />
      </Menu>

      <Code code={code} />
    </Wrapper>
  );
}
