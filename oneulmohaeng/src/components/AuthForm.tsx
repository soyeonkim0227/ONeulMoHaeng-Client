import AuthInputWrap from "./AuthInputWrap";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import userIcon from "../images/user_icon.svg";
import styled from "styled-components";

interface AuthProps {
    type: string;
}

const AuthForm = (props: AuthProps) => {
    if (props.type === "로그인") {
        return (
            <>
                <Word>이메일</Word>
                <AuthInputWrap
                    type="email"
                    placeholder="이메일을 입력해 주세요"
                    image={emailLogo}
                    password={false}
                    check={false}
                ></AuthInputWrap>
                <Word>비밀번호</Word>
                <AuthInputWrap
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    image={passwordLogo}
                    password={true}
                    check={false}
                ></AuthInputWrap>
            </>
        );
    } else {
        return (
            <>
                <Word>이메일</Word>
                <AuthInputWrap
                    type="email"
                    placeholder="이메일을 입력해 주세요"
                    image={emailLogo}
                    password={false}
                    check={true}
                ></AuthInputWrap>
                <AuthInputWrap
                    type="text"
                    placeholder="인증번호를 입력해 주세요"
                    image={emailLogo}
                    password={false}
                    check={false}
                ></AuthInputWrap>
                <Word>비밀번호</Word>
                <AuthInputWrap
                    type="password"
                    placeholder="영문자, 숫자, 특수문자 포함 최소 8자~20자"
                    image={passwordLogo}
                    password={true}
                    check={false}
                ></AuthInputWrap>
                <AuthInputWrap
                    type="password"
                    placeholder="비밀번호를 확인해 주세요"
                    image={passwordLogo}
                    password={true}
                    check={false}
                ></AuthInputWrap>
                <Word>닉네임</Word>
                <AuthInputWrap
                    type="text"
                    placeholder="닉네임을 입력해 주세요"
                    image={userIcon}
                    password={false}
                    check={true}
                ></AuthInputWrap>
            </>
        );
    }
};

const Word = styled.p`
    font-weight: bold;
    display: flex;
    margin: 30px 0 0 0;
`;

export default AuthForm;
