import React from "react";
import styled from "styled-components";
import AuthInputWrap from "./AuthInputWrap";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";

interface AuthProps {
  type: string;
}

const AuthForm = (props: AuthProps) => {
  if (props.type === "로그인") {
    return (
      <>
        <AuthInputWrap
          word="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요"
          image={emailLogo}
          password={false}
        ></AuthInputWrap>
        <AuthInputWrap
          word="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          image={passwordLogo}
          password={true}
        ></AuthInputWrap>
      </>
    );
  } else {
    return (
      <>
        <AuthInputWrap
          word="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요"
          image={emailLogo}
          password={false}
        ></AuthInputWrap>
        <AuthInputWrap
          word="비밀번호"
          type="password"
          placeholder="영문자, 숫자, 특수문자 포함 최소 8자~20자"
          image={passwordLogo}
          password={true}
        ></AuthInputWrap>
        <AuthInputWrap
          word=""
          type="password"
          placeholder="비밀번호를 확인해 주세요"
          image={passwordLogo}
          password={true}
        ></AuthInputWrap>
      </>
    );
  }
};

export default AuthForm;
