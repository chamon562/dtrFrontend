import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./HeroList.css";
const HeroList = ({ setSelectedHero, heroListData }) => {
  return (
    <div className="heroList">
      {heroListData.map((hero, index) => (
        <div onClick={() => setSelectedHero(index)}>
          <CollectionCard
            key={hero._id}
            id={index}
            friendId={hero.friendId}
            name={hero.name}
            image={
              "https://i.pinimg.com/474x/e8/89/4d/e8894d6ca0d560ead8c5f7e6bc335c9d.jpg"
            }
            rank={hero.turboRank}
          />
          {console.log(hero)}
          {console.log(index)}
        </div>
      ))}
    </div>
  );
};

export default HeroList;
