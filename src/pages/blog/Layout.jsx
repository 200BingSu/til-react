import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div style={{ backgroundColor: "pink" }}>로컬 메뉴</div>
      <div>
        <h2> Ouelet 자리 </h2>
        <div
          style={{
            backgroundColor: "lightgray",
            width: "100%",
            minHeight: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 250,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
