import { useReducer, useState } from "react"
import reviewReducer from "../utils/reducers"
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import { ReviewButton } from '../styled/Button'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { CardButton } from '../styled/Button';
import { Bodytext } from '../styled/Font';

const initialReviews = [
    {
        id: 1,
        description: "bad to use, do not recommend",
        rating: 5
    },
    {
        id: 2,
        description: "good to use, definitely recommend",
        rating: 4.5
    },
]

const labels = {
    0.5: 'Poor',
    1: 'Poor',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Poor',
    3: 'Poor+',
    3.5: 'Great',
    4: 'Great+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function Review() {

    const initialState = {
        reviews: initialReviews,
        review: "",
        rating: "",
        showEditBox: false,
        editReviewId: null,
        editReviewDesc: "",
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState)

    const { reviews, review, showEditBox, editReviewDesc } = store

    const [value, setValue] = useState(5);
    const [hover, setHover] = useState(-1);

    const handleOnChange = (e) => {
        dispatch({
            type: 'setReview',
            data: e.target.value
        })
    }

    const handleRatingChange = (e, newValue) => {
        setValue(newValue);
        dispatch({
            type: 'setRating',
            data: e.target.value
        })
    }


    const addReview = (e) => {
        e.preventDefault()
        dispatch({
            type: 'addReview'
        })
    }

    const deleteReview = (id) => {
        dispatch({
            type: 'deleteReview',
            data: id
        })
    }

    const editReview = (id) => {
        dispatch({
            type: 'editReview',
            data: id
        })
    }


    const handleEditReview = (e) => {
        dispatch({
            type: 'setEditReview',
            data: e.target.value
        })
        // setEditReviewDesc(e.target.value)
    }

    const handleEdit = () => {
        dispatch({
            type: 'handleEdit',
        })

    }

    return (
        <Stack spacing={3} id="reviews">
            <Bodytext variant="h1">REVIEWS</Bodytext>
            {reviews.map((review) => {
                return (
                    <Stack key={review.id} spacing={0.6}>  
                        <div>{review.description}</div>
                        <Rating name="read-only" value={review.rating} precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} readOnly />
                        <div>
                            <ReviewButton onClick={() => editReview(review.id)} style={{ marginRight: '10px' }}>Edit</ReviewButton>
                            <ReviewButton onClick={() => deleteReview(review.id)}>Delete</ReviewButton>
                        </div>
                    </Stack>
                )
            })}
            {showEditBox && (
                <div>
                    <textarea
                        value={editReviewDesc}
                        onChange={handleEditReview}
                    />
                    <div>
                        <ReviewButton onClick={handleEdit}>Save Edit</ReviewButton>
                    </div>
                </div>
            )}

            <form>
                <Stack spacing={1} style={{ marginTop: 30 }}>
                    <div>Add a Review :</div>
                    <textarea value={review} onChange={handleOnChange} />
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="controlled-rating"
                            value={value}
                            defaultValue={5}
                            precision={0.5}
                            onChange={handleRatingChange}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    </Box>
                    <div style={{ marginTop: '30px' }}>
                        <CardButton onClick={addReview}>Post Review</CardButton>
                    </div>
                </Stack>
            </form>
        </Stack>






        // onClick={() => editReview(review.id)}
    )
}

export default Review