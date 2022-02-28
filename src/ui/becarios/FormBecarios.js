import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
    useNavigate,
} from 'react-router-dom';

const theme = createTheme();

export default function FormBecarios() {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const Input = styled('input')({
        display: 'none',
    });

    const [valueCovid, setValueCovid] = React.useState('yes');
    const [valuePade, setValuePade] = React.useState('yes');

    const handleChangeCovid = (event) => {
        setValueCovid(event.target.value);
    };
    const handleChangePade = (event) => {
        setValuePade(event.target.value);
        console.log(valuePade);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Llena tus datos
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Domicilio"
                                    name="address"
                                    autoComplete="address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Telefono"
                                    name="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormLabel id="for-ine">Identificación oficial (INE, IFE, Pasaporte)</FormLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="file/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" >
                                        Subir Archivo
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="contactEmergency"
                                    label="Datos de un contacto en caso de emergancia"
                                    name="contactEmergency"
                                    autoComplete="contactEmergency"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="school"
                                    label="Escuela de procedencia"
                                    name="school"
                                    autoComplete="school"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormLabel id="for-cv">Credencias de Estudiante</FormLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="file/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" >
                                        Subir Archivo
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormLabel id="for-dae">Documento de asignacion escolar</FormLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="file/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" >
                                        Subir Archivo
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="nss"
                                    label="Número de seguro social"
                                    name="nss"
                                    autoComplete="nss"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormLabel id="for-nss">Comprobante seguro social</FormLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="file/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" >
                                        Subir Archivo
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel id="controlled-radio-buttons-covid">¿Cuenta ya con el esquema de vacunación completo covid?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="controlled-radio-buttons-covid"
                                    name="controlled-radio-covid"
                                    value={valueCovid}
                                    onChange={handleChangeCovid}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Si" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <FormLabel id="for-cfv">Certificado federal de vacunación covid</FormLabel>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="file/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span" >
                                        Subir Archivo
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel id="controlled-radio-buttons-pade">¿Tiene algún padecimiento medico que deba seguir de forna permanente?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="controlled-radio-buttons-pade"
                                    name="controlled-radio-pade"
                                    value={valuePade}
                                    onChange={handleChangePade}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Si" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<SendIcon />}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}