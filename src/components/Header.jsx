import React from "react";

const Header = (props) => {
  return (
    <header id="headerType" className={`header__wrap ${props.element}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            FDW <em>4-day week</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="/">FDW 소개</a>
            </li>
            <li>
              <a href="/">이주의 공연</a>
            </li>
            <li>
              <a href="/">공연 정보</a>
            </li>
            <li>
              <a href="/">공연장 찾기</a>
            </li>
            <li>
              <a href="/">공연 후기</a>
            </li>
            <li>
              <a href="/">공연 홍보</a>
            </li>
            <li>
              <a href="/">공연 친구찾기</a>
            </li>
            <li>
              <a href="/">자유게시판</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
          <a href="/">회원가입</a>
        </div>
      </div>
    </header>
  );
};

export default Header;