import styled from "styled-components";
import Header from "../components/Header";

const UserPage = () => {
    return (
        <Wrap>
            <Header />

            <Container></Container>
        </Wrap>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default UserPage;
