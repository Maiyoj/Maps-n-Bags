import { FaInstagramSquare } from 'react-icons/fa';


function Adventure(){
  return (
    <>
    <h1 className="abouth1" >About</h1>
    <div className="about">
    <img src={process.env.PUBLIC_URL + '/images/val.jpg'} alt="Valentine" className='image1'></img>
    <p>Hey, I'm Valentine! I'm a 20 something who is passionate about living an adventurous life and helping others to do the same.  I created this blog to share my travel photos, tips, thoughts, and stories with you
      Since graduating college, I continued to make travel a priority - both locally and globally. I found myself extremely unfulfilled and unsatisfied with my professional life. I also wanted to see more of the world and continue having extraordinary experiences. While working, I managed to save as much money as possible for the inevitable. After nearly 2 years, I made the leap and quit my job for full time travel. This was probably the most difficult decision I've ever had to make during my adult life - Do I leave behind what's 'right', 'normal', and 'stable'? Or do something  that I've always dreamed of doing? Fear of the unknown is REAL, yall!
      I can now happily say that leaving my job for an extraordinary life was the best decision I've ever made. I am now doing two things I always dreamed of - traveling the world & inspiring others to do the same. So if you're reading this, please know that it means the world to me! I am honored that you've decided to follow along with me on this journey! I hope that I am able to leave you with something that helps you, entertains you, or simply makes you smile. 
      KEEP GOINg Make yourself at home and say hi so that i can get to know you as well!</p>
      <img src={process.env.PUBLIC_URL + '/images/girl.jpg'} alt="Valentine" className='image2'></img>
      <p>Cruise with me</p>
    </div>
    
    <div className='footer'>
         <h3 className="imageHead"> Follow and Reach out</h3>
        <div className="contact">
            <p className="icons">INSTA<FaInstagramSquare />GRAM</p>
            <p>adventure@gmail.com</p>
            <p>@2022 designed with love by by Valentine. </p>
        </div>
        </div>
    </>
  )

}

export default Adventure;