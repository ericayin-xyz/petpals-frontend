import styled from 'styled-components';
import review from './Review'

const GridBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
`
const DetailWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ClickedCard(props) {
    // cost [ListItem, setItem] = useState(null) & delete the props
    const { cardId } = props
    const card = props.card

    if (!card) {
        return null;
    }
    return (
        <div id='clickedcard'>
            <DetailWapper>
                <h1>Clicked Card</h1>
                {/* {
                    cards.map((card) => {
                        return (
                            <CardDetail key={card.id} detail={card}/>
                        )
                    })
                } */}
            </DetailWapper>
            {/* <Review /> */}
        </div>
    )
}
