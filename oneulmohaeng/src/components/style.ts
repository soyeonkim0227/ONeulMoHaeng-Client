import styled from "styled-components";

export const ModalContainer = styled.div`
    // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ModalBackdrop = styled.div`
    // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
    z-index: 1; //위치지정 요소
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalBox = styled.div`
    background-color: #fff5f9;
    border-radius: 10px;
    width: 470px;
    display: flex;
    flex-direction: column;
    padding: 30px 35px;
`;

export const ExitButton = styled.button`
    background-color: #d4d4d4;
    color: white;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    /* margin: 10px; */
    padding: 5px 10px;
    width: 400px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
`;
