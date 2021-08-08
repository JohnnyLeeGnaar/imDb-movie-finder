import styled from "styled-components";

export default styled.h2`
  padding-top: 1%;
  color: ${(props) => props.theme.inputColor || "whitesmoke"};
  font-size: ${(props) => props.theme.fontSize};
  text-align: ${(props) => (props.theme.textAlign ? "center" : "")};
`;
