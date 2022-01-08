import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../../../../assets/images/instagram.png";
import twitterLogo from "../../../../assets/images/twitter.png";
import moreIcon from "../../../../assets/images/more.png";
import badgeIconHigh from "../../../../assets/images/shield1-removebg.png";
const Main = ({ selectedHero, heroListData }) => {
  console.log(selectedHero);
  console.log(heroListData);

  const [activeHero, setActiveHero] = useState(heroListData[0]);

  useEffect(() => {
    setActiveHero(heroListData[selectedHero]);
    console.log(heroListData[selectedHero]);
  }, [heroListData, selectedHero]);
  
  console.log(activeHero)
  return (
    <div className="main">
      <div className="mainContent">
        <div className="heroHighLight">
          <div className="heroContainer">
            <img
              className="selectedHero"
              src="https://www.kindpng.com/picc/m/625-6255710_heroes-of-newerth-maliken-hd-png-download.png"
            />
            {/* <img
              className="selectedHero"
              src={activeHero}
            /> */}
          </div>
        </div>

        {/* Hero Details */}
        <div className="heroDetails">
          <div className="title">{activeHero.name}</div>
          <span className="itemNumber">Turbo Rank: {activeHero.turboRank}</span>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={badgeIconHigh} />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>Friend Id: {activeHero.friendId}</div>
                <div className="ownerHandle">@{activeHero.name}</div>
              </div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
