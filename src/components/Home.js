
import { FaInstagramSquare } from 'react-icons/fa';

function Home(){
    return(
        <>
        <div className="home">
            <div id="home-content">
                <h1>Life is an Adventure</h1>
                <p>Where Do You Want To Start Your Next Adventure?</p>
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

        <div className="contact">
            <p className="icons"><FaInstagramSquare /></p>
            <p>adventure@gmail.com</p>
            <p>@2022 designed with love by by Valentine</p>
        </div>
        </>
    )

}
export default  Home;