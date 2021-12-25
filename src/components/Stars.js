import React from 'react';
import Star from "./Star";

function addStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(
            <li key={i}>
                <Star />
            </li>
        );
    }
    return stars;
}

function Stars({ count }) {
    return count < 1 || count > 5 ? false : (
        <ul className='card-body-stars u-clearfix'>
            {addStars(count)}
        </ul>
    );
}

export default Stars;