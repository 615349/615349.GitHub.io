import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.section`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

type SectionType = {
  href: string;
  text: string;
};

const Section = ({ href, text }: SectionType) => {
  return (
    <Wrapper>
      <Link to={href}>{text}</Link>
    </Wrapper>
  );
};

export default Section;
