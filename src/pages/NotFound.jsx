import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function NotFound() {
    return (
        <React.Fragment>
            <Container fixed>
                    <Stack sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                        <Typography fontSize={'10rem'} >404</Typography>
                        <text fontSize={'1.5rem'} fontWeight={'300'} style={{ letterSpacing: '1px' }}>
                            Ooops...    Page Not Found
                        </text>
                    </Stack>

            </Container>
        </React.Fragment>
    );
}