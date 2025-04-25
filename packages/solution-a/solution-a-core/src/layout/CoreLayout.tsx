// CoreLayout.tsx (코어 레이아웃)
import React from "react";
import { Button } from "common-ui";

type CoreLayoutProps = {
  title: string;
  renderCustomButton?: () => React.ReactNode;
  children: React.ReactNode;
};

export const CoreLayout: React.FC<CoreLayoutProps> = ({
  title,
  renderCustomButton,
  children,
}) => (
  <div style={{ textAlign: "center" }}>
    <h1>{title}</h1>
    <p>Welcome!</p>

    {/* default 버튼 */}
    {renderCustomButton ? (
      renderCustomButton()
    ) : (
      <Button title={"it's title"} />
    )}

    {/* 나머지 공통 콘텐츠 */}
    {children}
  </div>
);
