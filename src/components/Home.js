import React from 'react';
import { TiSocialTwitter} from "react-icons/ti";
import one from '../components/one.jpg'
import About from './About'



class Home extends React.Component {
    render(){

        return(
            <div>
                <h1 id='title-home'>annaoj</h1>
                <h3 id='h3-home'>ateliers</h3>
                {/* <TiSocialTwitter/> */}
                <img src={one} alt="picture" />
                <About/>


            </div>
        )
    }
    
}

export default Home