import styled from "styled-components";

interface ImageProps {
    src: string;
}

const ImageItem = (props: ImageProps) => {
    return (
        <>
            <ImageBox src={props.src}/>
        </>
    );
};

const ImageBox = styled.img`
    background-color: #f4f4f4;
    border-radius: 10px;
    width: 200px;
    height: 120px;
    margin-bottom: 15px;
    object-fit: cover;
`;

export default ImageItem;
