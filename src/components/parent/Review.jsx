import { useReducer } from "react"
import reviewReducer from "../utils/reducers"
import HoverRating from '../parent/Rating';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import { ReviewButton, ReviewPostButton } from '../styled/Button'
import { CardText } from '../styled/Card'

const initialReviews = [
    {
        id: 1,
        description: "bad to use, do not recommend",
    },
    {
        id: 2,
        description: "good to use, definitely recommend",
    },
]

function Review() {

    const initialState = {
        reviews: initialReviews,
        review: "",
        showEditBox: false,
        editReviewId: null,
        editReviewDesc: "",
    }

    const [store, dispatch] = useReducer(reviewReducer, initialState)

    const { reviews, review, showEditBox, editReviewDesc } = store

    const handleOnChange = (e) => {
        dispatch({
            type: 'setReview',
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
        <Stack spacing={3} style={{ marginTop: 80, maxWidth: '700px' }}>
            {reviews.map((review) => {
                return (
                    <Stack key={review.id} spacing={0.2}>
                        <div>{review.point}</div>
                        <div>{review.description}</div>
                        <div>{review.rating}</div>
                        <div>
                            <ReviewButton onClick={() => editReview(review.id)} style={{marginRight: '10px'}}>Edit</ReviewButton>
                            <ReviewButton onClick={() => deleteReview(review.id)} >Delete</ReviewButton>
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
            <Stack spacing={2}>
                <div>Add a Review</div>
                <textarea value={review} onChange={handleOnChange} />
                <HoverRating />
                <div style={{marginTop: '30px'}}>
                    <ReviewPostButton onClick={addReview}>Post Review</ReviewPostButton>
                </div>
            </Stack>
            </form>
        </Stack>






        // onClick={() => editReview(review.id)}
    )
}

export default Review