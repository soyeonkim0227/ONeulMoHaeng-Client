import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const MyPage = () => {
  return (
    <Wrap>
      <Header />
      <p>마이페이지 화면입니다</p>
    </Wrap>
  );
};

const Wrap = styled.div``;

export default MyPage;
