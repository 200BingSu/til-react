import { createRoot } from "react-dom/client";

import "./index.css";
import Sample3 from "./state-sample/Sample3";
import Sample4 from "./state-sample/Sample4";
import Sample5 from "./state-sample/Sample5";
import EventSample1 from "./event-sample/EventSample1";

createRoot(document.getElementById("root")).render(
  <>
    <EventSample1 />
  </>,
);
