import styled from "styled-components";
import { Font } from "../config/Font"

const IconButton = styled.button`
    background: ${props=> props.background};
    border: none; 
    color: ${props=> props.color ? props.color : 'white'};
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-transform: ${props=> props.upperCase || 'none'};
    transition: 0.3s;
    font-size: ${props=> props.fontSize ? props.fontSize : Font.ExtraSmall };
    &:hover { 
        background: ${props=>props.hover};
        transition: 0.3s;
    }
`;

export default IconButton;
