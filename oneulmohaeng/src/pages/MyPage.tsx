import styled from "styled-components";
import Header from "../components/Header";
import profilePhoto from "../images/profile_photo.jpeg";
import heartIcon from "../images/full_heart_icon.svg";
import Diary from "../components/Diary";
import logoutIcon from "../images/logout_icon.svg";
import { Link } from "react-router-dom";
import diaryImage from "../images/diary_photo.png";
import PasswordModal from "../components/PasswordModal";
import ProfileModal from "../components/ProfileModal";

const MyPage = () => {
    return (
        <Wrap>
            <Header />

            <Container>
                <LogoutWrap>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <LogoutIcon src={logoutIcon} />
                        <LogoutText>로그아웃</LogoutText>
                    </Link>
                </LogoutWrap>

                <MyContainer>
                    <Profile src={profilePhoto} />
                    <TextWrap>
                        <TextBody>
                            <TextKey>닉네임</TextKey>
                            <TextValue>소면이조아</TextValue>
                        </TextBody>
                        <TextBody>
                            <TextKey>이메일</TextKey>
                            <TextValue>soyeonkim0227@naver.com</TextValue>
                        </TextBody>
                        <TextBody>
                            <TextKey>비밀번호</TextKey>
                            <PasswordModal />
                        </TextBody>
                        <TextBody>
                            <TextKey>한줄소개</TextKey>
                            <TextValue>안뇽~~</TextValue>
                        </TextBody>
                    </TextWrap>

                    <ProfileModal />
                </MyContainer>

                <TitleWrap>
                    <LikeIcon src={heartIcon} />
                    <TitleText>좋아요 누른 일기들</TitleText>
                </TitleWrap>

                <Link to={"/diary-id"} style={{ textDecoration: "none" }}>
                    <DiaryContainer>
                        <Diary
                            title="히히 맛있당"
                            content="프실시렁시러얼시롱시로시러ㅓ럼;ㅣ마넝러마;ㅣㅏㅓ럼나 프실은 개발보다 써야할 파일이 많다 하기 싫다 ㅋ ㅠ큐큐ㅠㅠㅠㅋ 뉴진스 에스파 아이브 블랙핑크 에뤼아~"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                        <Diary
                            title="히히 맛있당"
                            content="프실시렁시러얼시롱시로시러ㅓ럼;ㅣ마넝러마;ㅣㅏㅓ럼나 프실은 개발보다 써야할 파일이 많다 하기 싫다 ㅋ ㅠ큐큐ㅠㅠㅠㅋ 뉴진스 에스파 아이브 블랙핑크 에뤼아~"
                            writerName="소면이조아"
                            date="2024-03-02"
                            likeCount={5}
                            image={diaryImage}
                        ></Diary>
                        <Diary
                            title="히히 맛있당"
                            content="프실시렁시러얼시롱시로시러ㅓ럼;ㅣ마넝러마;ㅣㅏㅓ럼나 프실은 개발보다 써야할 파일이 많다 하기 싫다 ㅋ ㅠ큐큐ㅠㅠㅠㅋ 뉴진스 에스파 아이브 블랙핑크 에뤼아~"
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

const LikeIcon = styled.img`
    width: 17px;
    height: 15px;
`;

const TitleText = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const TitleWrap = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 45px;
    margin-bottom: 20px;
`;

const TextValue = styled.p`
    color: #583c46;
    font-size: 19px;
    font-weight: 600;
`;

const TextKey = styled.p`
    color: #f68db0;
    font-size: 19px;
    width: 75px;
    display: flex;
    justify-content: space-between;
`;

const TextBody = styled.div`
    display: flex;
    gap: 25px;
`;

const TextWrap = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Profile = styled.img`
    border-radius: 50%;
    width: 210px;
    height: 210px;
`;

const MyContainer = styled.div`
    background-color: #fce8ef;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 1000px;
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 50px;
    gap: 88px;
`;

const LogoutText = styled.span``;

const LogoutIcon = styled.img`
    width: 14px;
    height: 16px;
`;

const LogoutWrap = styled.div`
    color: #583c46;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    gap: 8px;
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

export default MyPage;
