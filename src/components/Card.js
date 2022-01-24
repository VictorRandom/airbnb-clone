import React from "react";

export default function Card(props) {

    // console.log(props.card);

    let badgeText;

    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE";
    }


    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`./${props.card.coverImg}`} alt="card1" className="card--image" />
        <div className="card--status">
            <img src="./star1.png" alt="star1" className="card--star" />
            <span>{props.card.stats.rating}</span>
            <span className="gray">({props.card.stats.reviewCount}) • </span>
            <span className="gray">{props.card.location}</span>
        </div>
        <p> {props.card.title}</p>
        <p>
            <span className="bold">From ${props.card.price}</span> / person
        </p>
        </div>
    );
}
