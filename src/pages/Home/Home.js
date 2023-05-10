import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import RightPane from '../../components/RightPane/RightPane'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import './Home.css'


export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
        
      </div>
    </>


    
    

  )
}
