import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => {
    const userImg = props.userData.map((data) => {
        return (
            <>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>Matthew Harris</Card.Header>
                            <Card.Meta>Co-Worker</Card.Meta>
                            <Card.Description>
                                <h1>{data.title}</h1>
                            </Card.Description>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header content='Jake Smith' />
                            <Card.Meta content='Musicians' />
                            <Card.Description content='Jake is a drummer living in New York.' />
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a music producer living in Chicago.'
                        />
                    </Card>

                    <Card
                        header='Jenny Hess'
                        meta='Friend'
                        description='Jenny is a student studying Media Management at the New School'
                    />
                </Card.Group>
            </>
        )
    })
    return (
        <>
            {userImg}
        </>
    )
}



export default CardExampleCard