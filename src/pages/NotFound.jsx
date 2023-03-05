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
                    paddingBottom:'7rem',
                }}>
                        <Typography fontSize={'13rem'} >404</Typography>
                        <Typography fontSize={'1.6rem'}>Ooops, Page Not Found</Typography>
                    </Stack>

            </Container>
        </React.Fragment>
    );
}