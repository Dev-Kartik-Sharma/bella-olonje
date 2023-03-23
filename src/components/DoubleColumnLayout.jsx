import React from 'react'
import { Stack, Container } from '@mui/material'
import TextContent from './TextContent'

export const DoubleColumnLayout = ({phoneimg, title, heading, subheading, direction}) => {
    return (
        <Container>
            <Stack direction={direction} display='flex' justifyContent='center' alignItems='center' paddingX={5}>
                <Stack width='50%' height='700px'>
                    <img src={phoneimg} height='100%' />
                </Stack>
                <Stack width='50%' height='50%' spacing={2}>
                    <TextContent title={title} heading={heading} subheading={subheading} />
                </Stack>
            </Stack>
        </Container>
    )
}

export default DoubleColumnLayout