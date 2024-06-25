import styled from "styled-components";
import calenderIcon from "../images/calender_icon.svg";

interface DateProps {
    date: string;
}

const CalenderDrop = (props: DateProps) => {
    return (
        <>
            <DateItem>
                <img src={calenderIcon} />
                {props.date}
            </DateItem>
        </>
    );
};

const DateItem = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #444444;
    font-size: 16px;
    font-weight: bold;
    width: 150px;
    height: 45px;
`;

export default CalenderDrop;
