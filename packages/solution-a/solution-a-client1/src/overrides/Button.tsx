// overrides/Button.tsx
import React from "react";
import styled from "styled-components";

interface OverrideButtonProps {
  title: string;
  enable?: boolean;
  onClick?: () => void;
}

const RedButton = styled.div<Pick<OverrideButtonProps, "enable">>`
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
  background-color: red;
  color: white;

  &:hover {
    opacity: ${({ enable }) => (enable ? 0.8 : 1)};
  }
`;

export const Button: React.FC<OverrideButtonProps> = ({
  title,
  enable = true,
  onClick,
}) => (
  <RedButton enable={enable} onClick={enable ? onClick : undefined}>
    {title}
  </RedButton>
);
