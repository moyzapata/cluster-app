import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Container, CssBaseline, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItemAvatar from '@mui/material/ListItemAvatar';

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
                            src="%PUBLIC_URL%/images/logo192.png"
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
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Información del estudiante
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" variant="middle" />
                    <Box
                        sx={{
                            m: 2,
                            flexDirection: 'column',
                        }}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Work" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Vacation" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}