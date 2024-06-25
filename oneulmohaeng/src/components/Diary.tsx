import styled from "styled-components";
import settingIcon from "../images/setting_icon.svg";
import heartIcon from "../images/full_heart_icon.svg";
import emptyHeartIcon from "../images/empty_heart_icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

interface DiaryProps {
    title: string;
    content: string;
    writerName: string;
    date: string;
    likeCount: number;
    image: string;
}

const Diary = (props: DiaryProps) => {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <>
            <DiaryItem>
                <DiaryImage src={props.image} />
                <ContentWrap>
                    <TopWrap>
                        <TopText>
                            <Link
                                to={"/user-id"}
                                style={{ textDecoration: "none" }}
                            >
                                <Nickname>{props.writerName}</Nickname>
                            </Link>
                            <Title>{props.title}</Title>
                        </TopText>
                        <SettingIcon src={settingIcon} />
                    </TopWrap>
                    <MiddleText>{props.content}</MiddleText>
                    <BottomWrap>
                        <BottomDate>{props.date}</BottomDate>
                        <BottomHeartBox onClick={toggleLike}>
                            <HeartIcon
                                src={like ? heartIcon : emptyHeartIcon}
                            />
                            <HeartCount>{props.likeCount}</HeartCount>
                        </BottomHeartBox>
                    </BottomWrap>
                </ContentWrap>
            </DiaryItem>
        </>
    );
};

const HeartCount = styled.span`
    color: #777777;
`;

const HeartIcon = styled.img`
    width: 17px;
    height: 15px;
`;

const BottomHeartBox = styled.div`
    background-color: #f4f4f4;
    width: 60px;
    height: 25px;
    border-radius: 100px;
    padding: 0 10px 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BottomDate = styled.span`
    color: #7f7f7f;
`;

const BottomWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MiddleText = styled.p`
    color: #666666;
    /* height: 60px; */
    margin-top: 8px;
    margin-bottom: 15px;

    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const SettingIcon = styled.img``;

const Title = styled.span`
    color: #222222;
    margin-left: 10px;
    font-size: 19px;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const Nickname = styled.div`
    background-color: #fce8ef;
    color: #f68db0;
    border-radius: 20px;
    width: 90px;
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    padding: 13px 10px;
    display: flex;
    align-items: center;
`;

const TopText = styled.div`
    display: flex;
`;

const TopWrap = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding-left: 22px;
    padding-right: 22px;
`;

const DiaryImage = styled.img`
    border-radius: 10px 10px 0 0;
    width: 310px;
    height: 195px;
    object-fit: cover;
`;

const DiaryItem = styled.li`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    width: 310px;
    height: 365px;
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
`;

export default Diary;
