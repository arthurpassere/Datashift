import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataShift from "./DataShift.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataShift />
  </StrictMode>,
);
