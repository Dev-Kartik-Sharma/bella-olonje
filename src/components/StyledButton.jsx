import styled from 'styled-components'
import React from 'react'
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'

export const StyledButton = ({buttonText, borderRadius}) => {

    const StyledButton = styled.button`
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 16px 0px;
        width: 40%;
        height: 60px;
        background: transparent;
        box-shadow: 0px 5px 20px rgba(183, 50, 39, 0.2);
        border-radius: ${borderRadius};
        &:hover {
            background: #FA4A0C;
            cursor: pointer;
        }
    `;

    return (
        <StyledButton>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' color='secondary'>
                    {buttonText}
                </Typography>
            </ThemeProvider> 
        </StyledButton>
    )
}

export default StyledButton