import { createRoot } from "react-dom/client";

import EventSample2 from "./event-sample/EventSample2";
import "./index.css";
import EventSample1 from "./event-sample/EventSample1";
import EventSamplePractice from "./event-sample/EventSamplePractice";
import EventSampleTimer from "./event-sample/EventSampleTimer";

createRoot(document.getElementById("root")).render(
  <>
    <EventSampleTimer />
  </>,
);
