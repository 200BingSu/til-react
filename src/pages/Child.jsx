import { memo } from "react";

const Child = () => {
  console.log("자식 리랜더링");
  return <div>Child</div>;
};
export default memo(Child);
