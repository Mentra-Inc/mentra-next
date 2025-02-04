import { Typography } from "@mui/material";

function Heading({ title, color }: { title: string, color: string }) {
    return (
        <Typography className={`font-black text-[${color}]`} variant="h1" sx={{ fontSize: "3em", fontWeight: 900, color }}>{title}</Typography>
    );
}

export default Heading;