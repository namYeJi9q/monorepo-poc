import React from "react";
import { Button } from "common-ui";
import { CoreLayout } from "./layout/CoreLayout";
import { CommonSection1 } from "./pages/CommonSection1";
import { CommonSection2 } from "./pages/CommonSection2";

/**
 * Core application component for Solution A.
 */
interface AppProps {
  title?: string;
  hideTestButton?: boolean;
}
export const App: React.FC<AppProps> = ({
  title = "DEFAULT CORE",
  hideTestButton = false,
}) => (
  <CoreLayout title={title}>
    <CommonSection1 />
    <CommonSection2 />
    {!hideTestButton &&<Button title="공통 버튼" onClick={() => alert("Core Button")} />}
  </CoreLayout>
);
