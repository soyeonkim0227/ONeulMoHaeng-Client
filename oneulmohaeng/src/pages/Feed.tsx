import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Feed = () => {
  return (
    <Wrap>
      <Header />
      <p>피드 화면입니다</p>
    </Wrap>
  );
};

const Wrap = styled.div``;

export default Feed;
