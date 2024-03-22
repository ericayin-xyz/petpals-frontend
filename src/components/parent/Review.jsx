import { useReducer } from "react"
import reviewReducer from "../utils/reducers"
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import { ReviewEditButton } from '../styled/Button'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Bodytext } from '../styled/Font';
import { LinkedButton } from '../styled/Button';
import { ReviewContainer, PostReview } from '../styled/StyledContainer';
import { ReviewDescription, Icontext } from '../styled/Font';


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

    const addReview = (e) => {
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

    const handleEditRating = (e, newValue) => {
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
        <ReviewContainer id="reviews">
            <PostReview>
                <Bodytext style={{ marginBottom: 40, marginLeft: -6 }}>Reviews</Bodytext>
                {reviews.map((review) => {
                    return (
                        <Stack key={review.id} spacing={0.5} style={{ marginBottom: 25 }} >
                            <ReviewDescription>{review.description}</ReviewDescription>
                            <Rating name="read-only" value={review.rating} precision={0.5} emptyIcon={<StarIcon fontSize="inherit" />} readOnly />
                            {showButton && (
                                <div style={{ marginRight: '10px', marginTop: '3px' }}>
                                    <ReviewEditButton onClick={() => editReview(review.id)} style={{ marginRight: '10px' }}>Edit</ReviewEditButton>
                                    <ReviewEditButton onClick={() => deleteReview(review.id)}>Delete</ReviewEditButton>
                                </div>
                            )}
                        </Stack>
                    )
                })}
                {showEditBox && (
                    <Stack>
                        <textarea style={{ padding: 9, marginTop: '15px' }}
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
                            <ReviewEditButton onClick={handleEdit}>Save Edit</ReviewEditButton>
                        </div>
                    </Stack>
                )}
                <form>
                    <Stack style={{ maxWidth: '700px' }}>
                        <Icontext style={{ fontWeight: '800', textAlign: 'left' }}>Write a Review :</Icontext>
                        <textarea style={{ padding: 7, marginTop: 6, marginBottom: 11 }} value={review} onChange={handleOnChange} />
                        <Box
                            sx={{
                                // width: 200,
                                // display: 'flex',
                                // alignItems: 'center',
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
                            <LinkedButton style={{ marginTop: 20 }} onClick={addReview}>POST REVIEW</LinkedButton>
                        </div>
                    </Stack>
                </form>
            </PostReview>
        </ReviewContainer>
        // {/* </Stack> */}
    )
}

export default Review