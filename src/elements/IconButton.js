import styled from "styled-components";
import { Font } from "../config/Font"

const Button = styled.button`
    background: ${props=> props.background};
    border: none; 
    color: ${props=> props.color ? props.color : 'white'};
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-transform: ${props=> props.upperCase || 'none'};
    font-size: ${props=> props.fontSize ? props.fontSize : Font.ExtraSmall };
    &:hover { 
        background: ${props=>props.hover};
        transition: 0.3s;
    }
`;

// const IconButton = ({ icon, text, styleClass }) => {
//   return (
//     <button className={`d-flex align-items-center ${styleClass}`} style={{}}>
//       {icon}
//       {text}
//     </button>
//   );
// };

export default Button;
