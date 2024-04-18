import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "../images/oneulmohaeng_logo.svg";
import testProfile from "../images/test_profile_image.png";

const Header = () => {
  const [menu, setMenu] = useState(false);// setMenu(true)

  return (
    <>
      <Container>
        <SubContainer>
          <Link to={"/my"} className="menu">
            <Logo src={mainLogo} />
          </Link>

          <MenuList>
            <Link
              to={"/my"}
              className="menu"
              style={{ textDecoration: "none" }}
            >
              <MenuText>MY 다이어리</MenuText>
            </Link>
            <Link
              to={"/feed"}
              className="menu"
              style={{ textDecoration: "none" }}
            >
              <MenuText>피드</MenuText>
            </Link>
            <Link
              to={"/my-page"}
              className="menu"
              style={{ textDecoration: "none" }}
            >
              <MenuText>마이페이지</MenuText>
            </Link>
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

const MenuList = styled.ul`
  display: flex;
  gap: 85px;
  margin-left: 85px;
  list-style: none;

  li {
    &:hover {
      cursor: pointer;
    }
  }

  .submenu {
  }

  .focused {
  }
`;

const MenuText = styled.p`
  color: #f68db0;
  font-size: 16px;
  font-weight: bold;
`;

const SubContainer = styled.div`
  /* width: 800px; */
  width: 1000px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* background-color: red; */
`;

const Container = styled.header`
  /* margin: 0 420px; */
  padding: 0 400px;
  background-color: white;
  height: 70px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const Logo = styled.img`
  width: 110px;
  height: 40px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 25px;
`;

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

export default Header;
