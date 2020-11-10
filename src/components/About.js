import React from 'react';
import Footer from './Footer';



class About extends React.Component {
    render(){

        return(
            <div>
                <h1 id='title-home'>annaoj</h1>
                <h3 id='h3-home'>ateliers</h3>
                <h2 id='h3-about'>about</h2>
                <p id="p-test">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis laoreet neque. <br></br>
                <br></br>In sollicitudin est nec mattis rutrum. In luctus neque at ligula tincidunt, a interdum nunc mollis.  <br></br>
                <br></br>Duis ultrices augue non tortor laoreet ultricies. Nunc ut posuere velit. Donec fermentum viverra nunc et pellentesque. 
                <br></br>Pellentesque tincidunt leo ipsum.</p>
                
                <div id='footer'>
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

export default About