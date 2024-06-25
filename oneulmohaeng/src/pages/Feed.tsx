import Header from "../components/Header";
import styled from "styled-components";
import CommonDrop from "../components/CommonDrop";
import SubmitButton from "../components/SubmitButton";
import Diary from "../components/Diary";
import diaryImage from "../images/diary_photo.png";
import CalenderDrop from "../components/DateDrop";
import { Link } from "react-router-dom";

const Feed = () => {
    return (
        <Wrap>
            <Header />

            <Container>
                <ButtonContainer>
                    <DropWarp>
                        <CalenderDrop date="2024-03-02"></CalenderDrop>
                        <CommonDrop value="최신순"></CommonDrop>
                    </DropWarp>

                    <SubmitButton
                        value="작성하러 가기"
                        link="/write"
                    ></SubmitButton>
                </ButtonContainer>

                <Link to={"/diary-id"} style={{ textDecoration: "none" }}>
                    <DiaryContainer>
                        <Diary
                            title="히히 맛있당"
                            content="오늘은 학교 가는 날이다. 룰루랄라~ 프실하기 진짜 싫다.
                        써야할 파일은 왜그리 많은지 진짜 모루겄당 ㅋㅋ
                        나뒤하고싶당 크크 뉴진스 에스파 아이브 ㅁㅁㄴㅇㄹ"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                        <Diary
                            title="히히 맛있당"
                            content="오늘은 학교 가는 날이다. 룰루랄라~ 프실하기 진짜 싫다.
                        써야할 파일은 왜그리 많은지 진짜 모루겄당 ㅋㅋ
                        나뒤하고싶당 크크 뉴진스 에스파 아이브 ㅁㅁㄴㅇㄹ"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                        <Diary
                            title="히히 맛있당"
                            content="오늘은 학교 가는 날이다. 룰루랄라~ 프실하기 진짜 싫다.
                        써야할 파일은 왜그리 많은지 진짜 모루겄당 ㅋㅋ
                        나뒤하고싶당 크크 뉴진스 에스파 아이브 ㅁㅁㄴㅇㄹ"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                        <Diary
                            title="히히 맛있당"
                            content="오늘은 학교 가는 날이다. 룰루랄라~ 프실하기 진짜 싫다.
                        써야할 파일은 왜그리 많은지 진짜 모루겄당 ㅋㅋ
                        나뒤하고싶당 크크 뉴진스 에스파 아이브 ㅁㅁㄴㅇㄹ"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                    </DiaryContainer>
                </Link>
            </Container>
        </Wrap>
    );
};

const DiaryContainer = styled.ul`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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

export default Feed;
