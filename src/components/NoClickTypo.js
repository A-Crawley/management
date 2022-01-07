import { Typography } from "@mui/material";

export default function Typo(props){
    return (
        <Typography variant={props.variant} textAlign={props.textAlign} sx={{userSelect: 'none'}}>
            {props.children}
        </Typography>
    );
} 