import React from 'react'
import "./RightPane.css"

export default function RightPane() {
  return (
    <div className='RightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponser">Sponsered</span>
          <img src="./images/ad.jpg" alt="" className="adImage" />
          <span className="adText">Protect Your Skin.We can deliver to your Home.Order Now</span>
        </div>
        <div className="birthdayContainer">
          <img src="./images/birthday.jpg" alt="" className="birthdayImage" />
          <span className="birthdaytext"><b>Kasun Gayantha</b> and <b>2 others </b> having birthday today</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendContainer">
              <img src="./images/2.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlinefriendName">Bald Jony</span>
          </li>
        </div>
      </div>

    </div>
  )
}
