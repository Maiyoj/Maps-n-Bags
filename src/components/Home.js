
import { FaInstagramSquare } from 'react-icons/fa';

function Home(){
    return(
        <>
        <div className="home">
            <div id="home-content">
                <h1>Life is an Adventure</h1>
                <p>Travel with Me</p>
                <p>Check Out Our Blogs For Tips</p>
            </div>
        </div>

        <div className="bucketList">
        <h1 className="imageHead"> BucketList Experience Gallery</h1>
        <div className="images">
            <img src={process.env.PUBLIC_URL + '/images/maldives3.jpg'} alt="Gallery"></img>
            <img src={process.env.PUBLIC_URL + 'images/italy.jpeg'} alt="Italy"></img>
            <img src={process.env.PUBLIC_URL + '/images/maldives2.jpeg'} alt="Maldives"></img>
          
            </div>
        </div>

         <div className='footer'>
         <h3 className="imageHead"> Follow and Reach out</h3>
        <div className="contact">
            <p className="icons">INSTA<FaInstagramSquare />GRAM</p>
            <p>adventure@gmail.com</p>
            <p>@2022 designed with love by by Valentine. All Rights Reserved </p>
        </div>
        </div>
        </>
    )

}
export default  Home;