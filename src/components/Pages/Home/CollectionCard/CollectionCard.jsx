import React from 'react'
import rankIconHigh from "../../../../assets/images/shield1-removebg.png"
import "./CollectionCard.css"
const CollectionCard = ({id,friendId, name, rank, image}) => {
    console.log(id)
    return (
        <div className='collectionCard'>
            <img src={image} alt="" />
            <div className="details">
                <div className="name">
                    {name} <div className="id">friend ID: {friendId}</div>
                </div>
                <div className="priceContainer">
                    {/* TODO change rank badge baed on rank , if rank === 3000 {img src={rankIconLow} else if( rank === 3500 )} */}
                    <img src={rankIconHigh} className="rankImage"alt="" />
                    <div className="rank"> {rank}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
