import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="./images/2.jpg" alt="" className="postImage" />
                <span className="postUserName">Madumi Ashanthika</span>
                <span className="postTime">5 mins ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Hello I am Batman..! You understand..? I am batman..!!!
                </div>
                <img src="./images/2.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="./images/like.png" alt="" className="reactionPic" />
                    <img src="./images/haha.png" alt="" className="reactionPic" />
                    <img src="./images/hart.png" alt="" className="reactionPic" />
                    <span className="likeCount">Batman and 225 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">15 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
