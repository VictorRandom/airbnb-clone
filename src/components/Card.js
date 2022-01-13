import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <img src="./image1.png" alt="card1" className="card--image" />
            <div className="card--status">
                <img src="./star1.png" alt="star1" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p> Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}