import React from 'react'

const UserDisplay = (props) => {
    const userData = props.userData.map((data) => {
        return (
            <>
                <h1>{data.name}</h1>
                <h3>{data.username}</h3>
                <h4>{data.phone}</h4>
                <h2>{data.address.street}</h2>
            </>
        )
    })
    return (
        <div>
            {userData}
        </div>
    )
}

export default UserDisplay
