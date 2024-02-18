export default function reviewReducer(state, action) {
    switch (action.type) {
        case "setReview": {
            return {
                ...state,
                review: action.data,
            }
        }

        case "setValue": {
            return {
                ...state,
                value: action.payload
            }
        }

        case "addReview": {
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    { id: state.reviews.length + 1, description: state.review, 
                        rating: state.value
                    },
                ],
                review: "",
                value: null
            }
        }

        case "deleteReview": {
            const newReviews = state.reviews.filter(
                (review) => review.id !== action.data
            )
            return {
                ...state,
                reviews: newReviews,
            }
        }

        case "editReview": {
            return {
                ...state,
                showEditBox: true,
                editReviewId: action.data,
                editReviewDesc: state.reviews.find((review) => review.id === action.data).description,
                editRatingDesc: state.reviews.find((value) => value.id === action.data).rating,
                showButton: false,
            }
        }

        case "setEditReview": {
            return {
                ...state,
                editReviewDesc: action.data,
            }
        }

        case "setEditRating": {
            return {
                ...state,
                editRatingDesc: action.payload
            }
        }

        case "handleEdit": {
            const newReviews = [...state.reviews]
            const reviewIndexToEdit = state.reviews.findIndex(
                (review) => review.id === state.editReviewId
            )
            newReviews[reviewIndexToEdit].description = state.editReviewDesc
            newReviews[reviewIndexToEdit].rating = state.editRatingDesc

            return {
                ...state,
                reviews: newReviews,
                showEditBox: false,
                showButton: true,
            }
        }

        default:
            return state
    }
}