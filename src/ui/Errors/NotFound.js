import { CardContent, Typography } from "@mui/material"
import nps from "../../assets/nps.png"

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