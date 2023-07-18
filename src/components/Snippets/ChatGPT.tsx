import { useEffect, useState } from "react";
import styled from "styled-components";
import Template from "../Template";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 30px auto;
`;

const code = `
  import { useEffect, useState } from "react";

  const text =
    "Nathan and Cassidy Lawrence waited 15 years to get into Tasmania's expensive agricultural property market — and they never expected to run the farm they worked on as a young couple. The duo lived and worked as farm hands on a cosy dairy farm at Flowerdale in north-west Tasmania for more than a decade. The region has the highest median price per hectare for farmland in the country at $25,580 per hectare, according to Rural Bank's 2023 Farmland Values report.";

  export default function App() {
    const [activeId, setActiveId] = useState<number>(0);
    const [chars, setChars] = useState<string>("");

    useEffect(() => {
      const timeID = setTimeout(() => {
        const char = text.charAt(activeId);
        setActiveId((prev: number) => prev + 1);
        setChars((prev: string) => prev + char);
      }, 100);

      return () => clearTimeout(timeID);
    }, [activeId]);

    return <div className="App">{chars}</div>;
  }
`;

const text =
  "Nathan and Cassidy Lawrence waited 15 years to get into Tasmania's expensive agricultural property market — and they never expected to run the farm they worked on as a young couple. The duo lived and worked as farm hands on a cosy dairy farm at Flowerdale in north-west Tasmania for more than a decade. The region has the highest median price per hectare for farmland in the country at $25,580 per hectare, according to Rural Bank's 2023 Farmland Values report.";

export default function ChatGPT() {
  const [activeId, setActiveId] = useState<number>(0);
  const [chars, setChars] = useState<string>("");

  useEffect(() => {
    const timeID = setTimeout(() => {
      const char = text.charAt(activeId);
      setActiveId((prev: number) => prev + 1);
      setChars((prev: string) => prev + char);
    }, 100);

    return () => clearTimeout(timeID);
  }, [activeId]);

  return (
    <Template code={code}>
      <Wrapper>{chars}</Wrapper>
    </Template>
  );
}
