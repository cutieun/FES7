import React from "react";
import styled, {css} from "styled-components"

// const BorderNone = css` border: none;`;
// const BorderRadius = css` border-radius: 8px;`;
// const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

// const Btn = styled.button`
//     background-color: skyblue;
//     color: white;
//     margin-right: 10px;
// `
// const Btn2 = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     color: black;
// `
// const Btn3 = styled(Btn)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     background-color: green;
// `

const BorderNone = css` border: none;`;
const BorderRadius = css` border-radius: 8px;`;
const BoxShadow = css` box-shadow: 0 0 5px #33333333;`;

const Btn = styled.button`
    background-color: skyblue;
    color: white;
    margin-right: 10px;
`
const ExtendedBtn = styled(Btn)`
    ${BorderNone}
    ${BorderRadius}
    ${BoxShadow}
    color: ${(props)=>props.color};
    background-color: ${(props)=>props.bgColor}
`

const AppBtn = () => {
    return (
        <>
        <Btn>버튼1</Btn>
        <ExtendedBtn color="black" bgColor="gold">버튼2</ExtendedBtn>
        <ExtendedBtn bgColor="pink">버튼3</ExtendedBtn>
        </>
    );
};
  
export default AppBtn;