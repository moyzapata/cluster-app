import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Container, CssBaseline, Divider, Typography } from '@mui/material';

const theme = createTheme();

export const Account = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg" sx={{ mt: 5 }}>
                <CssBaseline />
                <Box
                    sx={{
                        width: 1150,
                        height: 500,
                        display: 'flex',
                        flexDirection: 'row',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Box
                        sx={{
                            m: 2,
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/logoclus.png"
                            sx={{ width: 160, height: 160 }}
                        />
                    </Box>
                    <Divider orientation="vertical" variant="middle" />
                    <Box
                        sx={{
                            m: 2,
                            flexDirection: 'column',
                        }}>
                        <Typography variant="h4" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}