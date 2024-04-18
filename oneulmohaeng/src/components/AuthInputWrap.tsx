import React from "react";
import styled from "styled-components";

interface InputProps {
  word: string;
  type: string;
  placeholder: string;
  image: string;
  password: boolean;
}

const AuthInputWrap = (props: InputProps) => {
  return (
    <>
      <Word>{props.word}</Word>
      <InputWrap image={props.image} password={props.password}>
        <InputBox type={props.type} placeholder={props.placeholder}></InputBox>
      </InputWrap>
    </>
  );
};

const InputWrap = styled.div<{ image: string; password: boolean }>`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 400px;
  height: 50px;
  padding: 0 16px;
  font-size: 16px;
  margin: 4px 35px 32px 35px;

  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    background: url(${(props) => props.image}) center center no-repeat;
    background-size: cover;
    object-fit: contain;
    width: ${(props) => (props.password ? `14px` : `16px`)};
    height: ${(props) => (props.password ? `17px` : `12px`)};
  }

  &::after {
    content: "";
    display: ${(password) => (password ? `inline-block` : `none`)};

    background: url(image) center center no-repeat;
    background-size: cover;
    object-fit: contain;
    width: 16px;
    height: 100%;
  }
`;

const Word = styled.p`
  font-weight: bold;
  display: flex;
  padding: 0 35px;
  margin: 30px 0 0 0;
`;

const InputBox = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-left: 12px;

  &::placeholder {
    color: #7f7f7f;
    font-size: 16px;
  }
`;

export default AuthInputWrap;
