import { useState } from "react";
import styled from "styled-components";
import logo from "../images/oneulmohaeng_logo.svg";
import loginPhoto from "../images/login_photo.svg";
import googleLogo from "../images/google_logo.svg";
import kakaoLogo from "../images/kakao_logo.svg";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
    const [tab, setTab] = useState(0);
    const menuArr = [
        { title: "로그인", content: "로그인 창입니다." },
        { title: "회원가입", content: "회원가입 창입니다." },
    ];

    const selectMenuHandler = (index: number) => {
        setTab(index);
    };

    return (
        <Wrap>
            <LogoWrap>
                <img src={logo} />
            </LogoWrap>

            <ContentWrap>
                <Content>
                    <TextBody>
                        <Text>
                            <PinkText>오늘모행</PinkText>나요?
                        </Text>
                        <Text>
                            <PinkText>오늘모행</PinkText>는지 기록해 보세요!
                        </Text>
                    </TextBody>
                    <img src={loginPhoto} />
                </Content>

                <TabWrap>
                    <TabMenu>
                        {menuArr.map((ele, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        tab === index ? "focused" : "submenu"
                                    }
                                    onClick={() => selectMenuHandler(index)}
                                >
                                    {ele.title}
                                </li>
                            );
                        })}
                    </TabMenu>

                    <TabContent>
                        <AuthForm type={menuArr[tab].title}></AuthForm>
                        <Link to={"/my-diary"}>
                            <SubmitButton>{menuArr[tab].title}</SubmitButton>
                        </Link>

                        <OauthWrap>
                            <OauthText>다른 계정으로 로그인하기</OauthText>
                            <IconWrap>
                                <img src={googleLogo} />
                                <img src={kakaoLogo} />
                            </IconWrap>
                        </OauthWrap>
                    </TabContent>
                </TabWrap>
            </ContentWrap>
        </Wrap>
    );
};

const IconWrap = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
`;

const OauthWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    gap: 25px;
`;

const OauthText = styled.p`
    font-size: 16px;
    color: #7f7f7f;
    margin: 0;
`;

const TabMenu = styled.ul`
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    border-radius: 15px 15px 0 0;
    width: 470px;
    height: 47px;
    font-size: 18px;
    cursor: pointer;

    .submenu {
        width: 237px;
        height: 47px;
        font-weight: normal;
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
        border-radius: 15px 15px 0px 0px;
    }

    .focused {
        background-color: white;
        width: 237px;
        height: 47px;
        color: #f68db0;
        font-weight: bold;
        border-radius: 15px 15px 0px 0px;
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
    }
`;

const TabContent = styled.div`
    width: 470px;
    font-size: 16px;
    text-align: center;
    padding: 0 35px;

    #login {
    }

    #signup {
        width: 700px;
    }
`;

const TabWrap = styled.div`
    background-color: white;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    background-color: #f68db0;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    font-weight: bold;
    color: white;
    width: 400px;
    height: 50px;
    margin-top: 30px;
    cursor: pointer;
`;

const Wrap = styled.div`
    padding: 17px 323px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const LogoWrap = styled.div``;

const ContentWrap = styled.div`
    display: flex;
    flex: 1;
    /* justify-content: center; */
    align-items: center;
    gap: 70px;
`;

const Content = styled.div`
    font-size: 25px;
    display: flex;
    flex-direction: column;
`;

const TextBody = styled.div`
    margin-bottom: 79px;
`;

const Text = styled.div`
    display: flex;
`;

const PinkText = styled.p`
    color: #f68db0;
    font-weight: bold;
    margin: 0;
`;

export default Login;
