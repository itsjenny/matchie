import React from 'react';
import './CSS/Main.css'




function Main(props) {
    return (
        <div >
           <div class='bar'>
               <h2 class='title'>Title</h2>
               <div class='divider'/>
               <div class='navButton'>Home</div>
               <div class='navButton'>About</div>
               <div class='navButton'>More</div>
           </div>
           <div class='main'>
                <h1>
                    This is the  <br/> starting page
                </h1>
                <div class='content'>
                    <p class='blurb'>
                        According to all known laws of aviation, there is no way a bee should be able to fly. 
                        <br/>
                        Its wings are too small to get its fat little body off the ground. 
                        <br/>
                        The bee, of course, flies anyway because bees don't care what humans think is impossible.
                        <br/>
                        Yellow, black. Yellow, black. Yellow, black. Yellow, black.
                        <br/>
                        Ooh, black and yellow! Let's shake it up a little.
                    </p>
                    <div style={{paddingLeft: "30%", paddingRight: "30%"}}>
                        <div class='nextButton'
                            onClick={props.nextStep}>
                            Get Started
                        </div> 
                    </div>
                    
                </div>
                <div><br/></div>
           </div>
            
            
            
            
         
        </div>
    )
}
export default Main