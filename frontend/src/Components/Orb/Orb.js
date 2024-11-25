import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()


    const moveOrb = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(calc(${width}px - 70vh), calc(${height / 2}px - 35vh));
    }
    100% {
        transform: translate(0, 0);
    }
`;

// const OrbStyled = styled.div`
//     width: 70vh;
//     height: 70vh;
//     background: red;
//     position: absolute;
//     border-radius: 50%;
//     animation: ${moveOrb} 15s alternate linear infinite;
// `;

    const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    // margin-left: -37vh;
    // margin-top: -37vh;
    background: linear-gradient(180deg, #00F5A0 0%, #00D9F5 50%, #0078FF 100%);
    filter: blur(400px);
    animation: ${moveOrb} 15s alternate linear infinite;
`;


    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb