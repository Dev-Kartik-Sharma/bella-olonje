import styled from "styled-components"
import React from 'react'

export const StyledIcon = ({src}) => {

    const StyledIcon = styled.div`
        background-image: url(${src});
        background-size: cover;
        background-repeat: no-repeat;
        height: 42px;
        width: 48px;
        &:hover{
            opacity: 0.5;
            cursor: pointer;
        }
    `;

    return (
        <StyledIcon />
    )
}

export default StyledIcon