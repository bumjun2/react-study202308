import React, { useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';

const App2 = () => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('useEffect 실행 - 최초 단 한번만 실행됨');
    console.log('로그인 검사 수행');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  // 서버로 로그인을 요청하는 함수
  const loginHandler = (email, password) => {
    // 로그인의 증거로 브라우저에 로그인 값을 1로 표현해서 저장
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag');
    setIsLoggedIn(false);
  };
  return (
    <>
      <MainHeader
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App2;
