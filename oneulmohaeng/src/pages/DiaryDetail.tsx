import styled from "styled-components";
import Header from "../components/Header";
import ImageItem from "../components/ImageItem";
import ImagePhoto from "../images/image_photo.jpeg";
import CalenderDrop from "../components/DateDrop";
import CommonDrop from "../components/CommonDrop";
import SubmitButton from "../components/SubmitButton";

const DiaryDetail = () => {
    return (
        <div>
            <Wrap>
                <Header />

                <Container>
                    <ButtonContainer>
                        <DropWarp>
                            <CalenderDrop date="2024-03-02"></CalenderDrop>
                            <CommonDrop value="비공개"></CommonDrop>
                        </DropWarp>

                        <RightWrap>
                            <SubmitButton
                                value="삭제하기"
                                link="/my-diary"
                            ></SubmitButton>
                            <SubmitButton
                                value="수정하기"
                                link="/write"
                            ></SubmitButton>
                        </RightWrap>
                    </ButtonContainer>

                    <WriteBox>
                        <InputContainer>
                            <TitleText>제목제목제모곡</TitleText>
                            <Line></Line>
                            <ContentText>
                                내용내요내요내요내ㅛ래뇨욜
                                내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜내용내요내요내요내ㅛ래뇨욜ㄴ
                            </ContentText>
                        </InputContainer>

                        <ImageContainer>
                            <ImageItem src={ImagePhoto} />
                            <ImageItem src={ImagePhoto} />
                        </ImageContainer>
                    </WriteBox>
                </Container>
            </Wrap>
        </div>
    );
};

const ImageContainer = styled.div`
    background-color: #fce8ef;
    border-radius: 0 10px 10px 0;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

const ContentText = styled.p`
    color: #7f7f7f;
    font-size: 16px;
    border: none;
    width: 100%;
`;

const Line = styled.hr`
    background-color: #eaeaea;
    border: none;
    width: 100%;
    height: 2px;
`;

const TitleText = styled.p`
    color: #7f7f7f;
    font-size: 25px;
    border: none;
    width: 100%;
`;

const InputContainer = styled.div`
    background-color: white;
    border-radius: 10px 0 0 10px;
    width: 750px;
    padding: 47px 88px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const WriteBox = styled.div`
    width: 1000px;
    height: 850px;
    display: flex;
`;

const RightWrap = styled.div`
    margin-left: auto;
    display: flex;
    gap: 15px;
`;

const DropWarp = styled.div`
    display: flex;
    gap: 15px;
`;

const ButtonContainer = styled.div`
    width: 1000px;
    height: 95px;
    margin-bottom: 25px;
    display: flex;
    align-items: end;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default DiaryDetail;
