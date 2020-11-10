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

            <div id='footer-work'>
                <h6>26 abc lane <br></br> london <br></br> Sw13 5dx <br></br>+44 020 1234 5678</h6>

               <h6> <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer">Instagram</a><br></br>
                <a href=" https://twitter.com/"  target="_blank " rel="noopener noreferrer" >Twitter</a><br></br>
                <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"  target="_blank" rel="noopener noreferrer">Terms and Conditions </a><br></br>
                <a href="https://www.termsfeed.com/blog/sample-privacy-policy-template/"  target="_blank" rel="noopener noreferrer">Privacy policy </a></h6>

                <br></br>
                <h6><a href="https://joannathedeveloper.netlify.app/" target="_blank" rel="noopener noreferrer">J.E.Kalema Web Applications</a> </h6>



             
            </div>
            </div>
        )
    }
    
}

export default Work