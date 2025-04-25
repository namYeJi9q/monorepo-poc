import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title: string;
  onClick?: (e?: any) => void;
  enable?: boolean;
};

const StyledButton = styled.div<{ enable: boolean }>`
  width: auto;
  height: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 6px 14px;
  max-height: 30px;

  cursor: ${({ enable }) => (enable ? "pointer" : "default")};
  color: ${({ enable }) =>
    enable ? "var(--logstackColor)" : "var(--greyColor)"};
  border: 1px solid
    ${({ enable }) => (enable ? "var(--logstackColor)" : "var(--greyColor)")};
  background-color: white;

  &:hover {
    opacity: ${({ enable }) => (enable ? 0.8 : 1)};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick = () => {},
  enable = true,
}) => (
  <StyledButton enable={enable} onClick={enable ? onClick : undefined}>
    {title}
  </StyledButton>
);
