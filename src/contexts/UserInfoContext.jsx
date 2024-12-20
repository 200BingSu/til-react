import { createContext, useState } from "react";

// 외부에서context state를 사용하므로
export const UserInfoContext = createContext();

// 지정한 범위로 접근해서,
// context에 만들어둔 값을 읽거나,
// context에 만들어둔 기능을 사용하기 위한 공급자(provider)생성
export const UserInfoProvider = ({ children }) => {
  // useState 로 로그인한 사용자 정보 관리
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
