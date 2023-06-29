import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 990px;
  margin: 30px auto;
`;

const Description = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

export default Description;
