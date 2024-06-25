import { useState } from "react";
import styled from "styled-components";
import modifyMyIcon from "../images/modify_my_icon.svg";
import AuthInputWrap from "./AuthInputWrap";
import emailLogo from "../images/email.svg";
import plusIcon from "../images/plus_icon.svg";

import {
    ButtonWrap,
    ExitButton,
    ModalBackdrop,
    ModalBox,
    ModalContainer,
} from "./style";

const ModifyMyIcon = styled.img`
    width: 21px;
    height: 21px;
`;

const ModifyMyButton = styled.button`
    background-color: #f7bbcf;
    border-radius: 100%;
    border: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 48px;
    height: 48px;
    margin-top: auto;
    cursor: pointer;
`;

const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainer>
                <ModifyMyButton
                    onClick={openModalHandler}
                    // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
                >
                    <ModifyMyIcon src={modifyMyIcon} />
                </ModifyMyButton>
                {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
                {isOpen ? (
                    <ModalBackdrop onClick={openModalHandler}>
                        {/* event 버블링을 막는 메소드 */}
                        <ModalBox onClick={(e) => e.stopPropagation()}>
                            <ModalTitle>프로필 수정</ModalTitle>
                            <Word>닉네임</Word>
                            <AuthInputWrap
                                type="text"
                                placeholder="닉네임을 입력해 주세요"
                                image={emailLogo}
                                password={false}
                                check={true}
                            ></AuthInputWrap>
                            <Word>한 줄 소개</Word>
                            <AuthInputWrap
                                type="text"
                                placeholder="인증번호를 입력해 주세요"
                                image={emailLogo}
                                password={false}
                                check={false}
                            ></AuthInputWrap>
                            <Word>프로필 사진</Word>
                            <AddImageButton>
                                <img src={plusIcon} />
                                사진 추가
                            </AddImageButton>

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

const AddImageButton = styled.button`
    background-color: #f7bbcf;
    border-radius: 5px;
    color: white;
    border: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 10px;
`;

const Word = styled.p`
    font-weight: bold;
    display: flex;
    margin: 30px 0 0 0;
`;

const ModalTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;

export default ProfileModal;
