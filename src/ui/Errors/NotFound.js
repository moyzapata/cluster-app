import { Box, Container, CssBaseline, Grid, Link, Paper, Typography } from "@mui/material"
import chems from "../../assets/chems.png"

export const NotFound = () => {
    return (
        <>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box sx={{ width: '100%', flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <img width={300} src={chems} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h1" sx="bool" gutterBottom>
                                    Error 404
                                </Typography>
                                <Typography variant="h5" sx="bool">
                                    Al servidor le dio anmsiedad y no encontró lo que buscabas, <Link href="/">Regresar al inicio</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}