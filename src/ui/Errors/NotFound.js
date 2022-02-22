import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material"
import nps from './nps.png';

export const NotFound = () => {
    return (
        <>
            <img width={300} src={nps} />
            <CardContent>
                <Typography variant="h4" sx="bool">
                    Error 404
                </Typography>
            </CardContent>
        </>
    )
}