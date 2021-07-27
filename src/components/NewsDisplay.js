import React from 'react'
import "./NewsDisplay.css"
const NewsDisplay = (props) => {
    const renderNews = props.newsData.map((data) => {
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    return (
        <div className="note">
            {renderNews}
        </div>
    )
}

export default NewsDisplay
