import { useReducer } from "react"
import reviewReducer from "../utils/reducers"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


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
        <div style={{ padding: 20, marginTop: 80 }}>
            <h6>Reviews</h6>
            {reviews.map((review) => {
                return (
                    <div key={review.id}>
                        <div>{review.point}</div>
                        <div>{review.description}</div>

                        <button onClick={() => editReview(review.id)} >Edit</button>
                        <button onClick={() => deleteReview(review.id)} >Delete</button>
                    </div>
                )
            })}
            {showEditBox && (
                <div>
                    <textarea
                        value={editReviewDesc}
                        onChange={handleEditReview}
                    />
                    <div>
                        <button onClick={handleEdit}>Save Edit</button>
                    </div>
                </div>
            )}

            <form>
                <div>Add a Review</div>
                <textarea value={review} onChange={handleOnChange} />
                <Rating
                    name="Reviews"
                    value={review}
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <div>
                    <button onClick={addReview}>Post Review</button>
                </div>
            </form>
        </div>






        // onClick={() => editReview(review.id)}
    )
}

export default Review