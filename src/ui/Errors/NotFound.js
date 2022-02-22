import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material"
import nps from './nps.png';

export const NotFound = () => {
    return (
        <>
            <img width={150} src={nps} />
            <CardContent>
                <Typography va riant="body2" color="text.secondary" sx="bool">
                    Error 404
                </Typography>
            </CardContent>
        </>
    )
}