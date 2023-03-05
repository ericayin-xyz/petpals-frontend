export default function reviewReducer(state, action) {
    switch (action.type) {
        case "setReview": {
            return {
                ...state,
                review: action.data,
            }
        }

        case "addReview": {
            return {
                ...state,
                reviews: [
                    ...state.reviews,
                    { id: state.reviews.length + 1, description: state.review },
                ],
                review: "",
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
                editReviewDesc: state.reviews.find(
                    (review) => review.id === action.data
                ).description,
            }
        }

        case "setEditReview": {
            return {
                ...state,
                editReviewDesc: action.data,
            }
        }

        case "handleEdit": {
            const newReviews = [...state.reviews]
            const reviewIndexToEdit = state.reviews.findIndex(
                (review) => review.id === state.editReviewId
            )
            newReviews[reviewIndexToEdit].description = state.editReviewDesc

            return {
                ...state,
                reviews: newReviews,
                editReviewDesc: "",
                showEditBox: false,
            }
        }

        default:
            return state
    }
}