import Stack from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function CardRating({ value }) {
    // const value = 3.5;
    return (
        <Stack>
            <Rating
                name="Reviews"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Stack>
    );
}