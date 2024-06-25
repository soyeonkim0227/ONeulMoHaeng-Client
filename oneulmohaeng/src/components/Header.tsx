import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "../images/oneulmohaeng_logo.svg";
import testProfile from "../images/test_profile_image.png";

const Header = () => {
    const [menu, setMenu] = useState(0);
    const menuArr = [
        { key: "MY 다이어리", value: "/my-diary" },
        { key: "피드", value: "/feed" },
        { key: "마이페이지", value: "/my-page" },
    ];

    return (
        <>
            <Container>
                <SubContainer>
                    <Link to={"/my-diary"}>
                        <Logo src={mainLogo} />
                    </Link>

                    <MenuList>
                        {menuArr.map((e, idx) => {
                            console.log(menu);
                            return (
                                <li>
                                    <Link
                                        // key={idx}
                                        onClick={() => {
                                            setMenu(idx);
                                        }}
                                        className={
                                            menu === idx ? "focused" : "submenu"
                                        }
                                        to={e.value}
                                        style={{
                                            textDecoration: "none",
                                            // color: "black",
                                        }}
                                    >
                                        {e.key}
                                    </Link>
                                </li>
                            );
                        })}
                    </MenuList>

                    <Right>
                        <Nickname>소면이조아</Nickname>
                        <Link to={"/my-page"} className="menu">
                            <Profile src={testProfile} />
                        </Link>
                    </Right>
                </SubContainer>
            </Container>
        </>
    );
};

const Profile = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
`;

const Nickname = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    background-color: #fce8ef;
    border-radius: 20px;
    font-size: 16px;
    color: #f68db0;
    padding: 13px 10px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 25px;
`;

const MenuList = styled.ul`
    display: flex;
    gap: 85px;
    margin-left: 85px;
    list-style: none;
    font-size: 16px;
    color: black;

    .submenu {
        font-weight: normal;
    }

    .focused {
        color: #f68db0;
        font-weight: bold;
    }
`;

const Logo = styled.img`
    width: 110px;
    height: 40px;
    cursor: pointer;
`;

const SubContainer = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
`;

const Container = styled.header`
    background-color: white;
    height: 70px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 400px;
`;

export default Header;
