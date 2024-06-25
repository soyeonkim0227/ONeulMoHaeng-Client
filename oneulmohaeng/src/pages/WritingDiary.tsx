import styled from "styled-components";
import Header from "../components/Header";
import CommonDrop from "../components/CommonDrop";
import SubmitButton from "../components/SubmitButton";
import CalenderDrop from "../components/DateDrop";
import plusIcon from "../images/plus_icon.svg";
import ImageItem from "../components/ImageItem";
import ImagePhoto from "../images/image_photo.jpeg";

const WritingDiary = () => {
    return (
        <Wrap>
            <Header />

            <Container>
                <ButtonContainer>
                    <DropWarp>
                        <CalenderDrop date="2024-03-02"></CalenderDrop>
                        <CommonDrop value="비공개"></CommonDrop>
                    </DropWarp>

                    <SubmitButton
                        value="작성 완료"
                        link="/diary-id"
                    ></SubmitButton>
                </ButtonContainer>

                <WriteBox>
                    <InputContainer>
                        <TitleInput placeholder="제목"></TitleInput>
                        <Line></Line>
                        <ContentInput placeholder="내용을 작성하여 주세요."></ContentInput>
                    </InputContainer>

                    <ImageContainer>
                        <AddImageButton>
                            <img src={plusIcon} />
                            사진 추가
                        </AddImageButton>
                        <ImageItem src={ImagePhoto} />
                        <ImageItem src={ImagePhoto} />
                    </ImageContainer>
                </WriteBox>
            </Container>
        </Wrap>
    );
};

const AddImageButton = styled.button`
    background-color: #f7bbcf;
    border-radius: 10px;
    color: white;
    border: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-bottom: 30px;
`;

const ImageContainer = styled.div`
    background-color: #fce8ef;
    border-radius: 0 10px 10px 0;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

const ContentInput = styled.input`
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

const TitleInput = styled.input`
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
    justify-content: space-between;
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

export default WritingDiary;
