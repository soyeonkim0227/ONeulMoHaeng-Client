import styled from "styled-components";
import dropdownIcon from "../images/dropdown_icon.svg";

interface DropProps {
    value: string;
}

const CommonDrop = (props: DropProps) => {
    return (
        <>
            <DropItem>
                {props.value}
                <img src={dropdownIcon} />
            </DropItem>
        </>
    );
};

const DropItem = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    color: #444444;
    font-size: 16px;
    font-weight: bold;
    width: 100px;
    height: 45px;
`;

export default CommonDrop;
