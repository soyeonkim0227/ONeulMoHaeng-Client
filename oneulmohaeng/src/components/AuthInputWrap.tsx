import styled from "styled-components";
import passwordhideIcon from "../images/password_hide_icon.svg";

interface InputProps {
    type: string;
    placeholder: string;
    image: string;
    password: boolean;
    check: boolean;
}

const AuthInputWrap = (props: InputProps) => {
    return (
        <>
            <Wrap>
                <InputWrap image={props.image} password={props.password}>
                    <InputBox
                        type={props.type}
                        placeholder={props.placeholder}
                    ></InputBox>
                </InputWrap>
                {props.check && (
                    <CheckButton>
                        {props.type === "email" ? "발송" : "중복확인"}
                    </CheckButton>
                )}
            </Wrap>
        </>
    );
};

const CheckButton = styled.button`
    background-color: #F7BBCF;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 5px;
    border: none;
    padding: 0 10px 0 10px;
    height: 50px;
    word-break: keep-all;
    font-size: 16px;
    font-weight: bold;
`;

const InputWrap = styled.div<{
    image: string;
    password: boolean;
}>`
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    padding: 0 16px;
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
        content: "";
        display: inline-block;
        background: url(${(props) => props.image}) center center no-repeat;
        background-size: cover;
        object-fit: contain;
        width: ${(props) => (props.password ? `14px` : `17px`)};
        height: ${(props) => (props.password ? `15px` : `12.5px`)};
    }

    &::after {
        content: "";
        display: ${(password) => (password ? `inline-block` : `none`)};

        background: url(${() => passwordhideIcon}) center center no-repeat;
        background-size: cover;
        object-fit: contain;
        width: ${(props) => props.password && `19px`};
        height: ${(props) => props.password && `17px`};
        margin-left: auto;
    }
`;

const InputBox = styled.input`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;

    &::placeholder {
        color: #7f7f7f;
        font-size: 16px;
    }
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-top: 5px;
`;

export default AuthInputWrap;
