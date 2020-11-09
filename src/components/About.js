import React from 'react';
import two from '../components/two.jpg'



class About extends React.Component {
    render(){

        return(
            <div>
                <h3 id='h3-about'>about</h3>
                <img src={two} alt="picture" />
                <h5>We are a minimilist gallery........</h5>


            </div>
        )
    }
    
}

export default About