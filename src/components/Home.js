import React from 'react';
import { TiSocialTwitter} from "react-icons/ti";
import one from '../components/one.jpg'



class Home extends React.Component {
    render(){

        return(
            <div>
                <h1 id='title-home'>ANNAOJ</h1>
                <h3>atelier</h3>
                {/* <TiSocialTwitter/> */}
                <img src={one} alt="picture" />


            </div>
        )
    }
    
}

export default Home