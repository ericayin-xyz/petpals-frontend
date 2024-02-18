import { useReducer } from "react"
import reviewReducer from "../utils/reducers"
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import { ReviewButton } from '../styled/Button'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Bodytext } from '../styled/Font';
import { LinkedButton } from '../styled/Button';

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

function Review() {

    const initialState = {
        reviews: initialReviews,
        review: "",
        value: 5,
        hover: -1,
        showEditBox: false,
        showButton: true,
        editReviewId: null,
        editReviewDesc: "",
        editRatingDesc: 5
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState,)

    const { reviews, review, value, showEditBox, showButton, editReviewDesc, editRatingDesc } = store

    const handleOnChange = (e) => {
        dispatch({
            type: "setReview",
            data: e.target.value
        })
    }

    const handleRatingChange = (e, newValue) => {
        dispatch({
            type: 'setValue',
            payload: newValue
        })
    }

    const addReview =(e) => {
        e.preventDefault()
        dispatch({
            type: "addReview",
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
    }

    const handleEditRating =(e, newValue) => {
        dispatch({
            type: 'setEditRating',
            payload: newValue
        })
    }

    const handleEdit = () => {
        dispatch({
            type: 'handleEdit',
        })

    }

    return (
        <Stack id="reviews" spacing={1} style={{ marginLeft: 30 }}>
            <Bodytext variant="h1" style={{ marginBottom: 30 }}>Reviews</Bodytext>
            {reviews.map((review) => {
                return (
                    <Stack key={review.id} spacing={0.5} style={{ marginBottom: 15 }} >
                        <div>{review.description}</div>
                        <Rating name="read-only" value={review.rating} precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} readOnly />
                        {showButton && (
                            <div>
                            <ReviewButton onClick={() => editReview(review.id)} style={{ marginRight: '10px' }}>Edit</ReviewButton>
                            <ReviewButton onClick={() => deleteReview(review.id)}>Delete</ReviewButton>
                            </div>
                        )}
                    </Stack>
                )
            })}
            {showEditBox && (
                            <Stack>
                                <textarea style={{ padding: 7, marginTop: '15px'}}
                                    value={editReviewDesc}
                                    onChange={handleEditReview}
                                />
                                <Rating 
                                    name="editable-rating" precision={0.5} 
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} 
                                    value={editRatingDesc}
                                    onChange={handleEditRating} 
                                />
                                <div>
                                    <ReviewButton onClick={handleEdit}>Save Edit</ReviewButton>
                                </div>
                            </Stack>
            )}
            <form>
                <Stack spacing={1} style={{ marginTop: 30 }}>
                    <div>Write a Review :</div>
                    <textarea style={{ padding: 7 }} value={review} onChange={handleOnChange} />
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="rating"
                            value={value}
                            precision={0.5}
                            onChange={handleRatingChange}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </Box>
                    <div>
                        <LinkedButton style={{ marginTop: 10 }} onClick={addReview}>POST REVIEW</LinkedButton>
                    </div>
                </Stack>
            </form>
        </Stack>
    )
}

export default Review