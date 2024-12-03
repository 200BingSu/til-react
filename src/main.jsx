import { createRoot } from "react-dom/client";

import "./index.css";
import Todo from "./todos/Todo";
import Diary from "./diaries/Diary";

createRoot(document.getElementById("root")).render(
  <>
    <Diary />
  </>,
);
