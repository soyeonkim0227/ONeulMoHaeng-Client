import { useState } from "react";
import styled from "styled-components";
import AuthInputWrap from "./AuthInputWrap";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import { ButtonWrap, ExitButton, ModalBackdrop, ModalBox, ModalContainer } from "./style";

const PasswordModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainer>
                <ChangeButton
                    onClick={openModalHandler}
                    // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
                >
                    {/* <ModifyMyIcon src={modifyMyIcon} /> */}
                    {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
                변경
                </ChangeButton>
                {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
                {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        {/* event 버블링을 막는 메소드 */}
                        <ModalBox onClick={(e) => e.stopPropagation()}>
                            <ModalTitle>비밀번호 수정</ModalTitle>
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

                            <ButtonWrap>
                                <ExitButton onClick={openModalHandler}>
                                    취소
                                </ExitButton>
                                <ExitButton onClick={openModalHandler}>
                                    수정 완료
                                </ExitButton>
                            </ButtonWrap>
                        </ModalBox>
                    </ModalBackdrop>
                ) : null}
            </ModalContainer>
        </>
    );
};

const Word = styled.p`
    font-weight: bold;
    display: flex;
    margin: 30px 0 0 0;
`;

const ModalTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`

const ChangeButton = styled.button`
    background-color: #f7bbcf;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 50px;
    height: 30px;
    cursor: pointer;
`;



export default PasswordModal;
