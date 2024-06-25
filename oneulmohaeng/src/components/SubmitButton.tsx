import { Link } from "react-router-dom";
import styled from "styled-components";

interface DropProps {
    value: string;
    link: string;
}

const SubmitButton = (props: DropProps) => {
    return (
        <>
            <Link to={props.link}>
                <Button>{props.value}</Button>
            </Link>
        </>
    );
};

const Button = styled.button`
    background-color: #f68db0;
    color: white;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    width: 130px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
`;

export default SubmitButton;
