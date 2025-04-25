// packages/solution-a-client1/src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "solution-a-core/src";
import { Button } from "./overrides/Button";

// 시작 시 한번만 실행
const root = createRoot(document.getElementById("root"));
root.render(<App title="Solution Client1" hideTestButton={false} />);
