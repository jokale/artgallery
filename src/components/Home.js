import React from 'react';
import { TiSocialTwitter} from "react-icons/ti";
import one from '../components/one.jpg'
import two from '../components/two.jpg'
import Footer from './Footer';




class Home extends React.Component {
    render(){

        return(
            <div>
                <h1 id='title-home'>annaoj</h1>
                <h3 id='h3-home'>ateliers</h3>
                {/* <TiSocialTwitter/> */}
                <center><img id="one-pic" src={one} alt="picture" /></center> <br></br>
               {/* <br></br> <img id="two-pic" src={two} alt="picture" /> */}

                <Footer/>

            </div>
        )
    }
    
}

export default Home