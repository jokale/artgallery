import React from 'react';
import one from './one.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import Footer from './Footer';



class Work extends React.Component {
    render(){

        return(
            <div>
                <h1 id='title-home'>annaoj</h1>
                <h3 id='h3-home'>ateliers</h3>
                <h2 id='h3-about'>work</h2>
                <img id="one-pic" src={one} alt="picture" /> <br></br>
                <br></br> <img id="three-pic" src={three} alt="picture" /> <br></br>
                <br></br> <img id="four-pic" src={four} alt="picture" />  <br></br>
                <br></br> <img id="five-pic" src={five} alt="picture" /> <br></br>



               
            <a href='https://design-milk.com/minimalist-artwork-reflecting-on-the-human-condition/' target="_blank" rel="noopener noreferrer" id='a-about'> orgin of work</a>
            <Footer/>
            </div>
        )
    }
    
}

export default Work