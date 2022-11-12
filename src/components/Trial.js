import { useEffect, useState } from "react";

export default function Trial(props) {
    const { data } = props;
}







<div className="App">
  

    <div className='MainApp'>
      <div className="NavBar">
        <img src={GitLogo} alt="GitLogo" className='GitLogo'/>
        <div className='Error-test'>ErrorBoundary Test</div>
        <div className='Contact'>Contact Page</div>
      </div>

      <div className="main">
		  
			    <div className="image"> 
            <div className='gitAvatar'>
              <div className='parent-image'>
            
              <img src={avatar} alt="Git Avatar" className='avatar'/>
              </div>
              <h1 className='gitName'>{name}</h1>

              <p className='para1'> "...@{userName} is a Frontend Developer curious about the intersection of Tech and Pharmacology given her background as a Pharmacology major." 
              </p>
              
              <Link to= "/Repos"> <button className='repos'>VIEW REPOSITORIES</button> </Link>
              
              
            </div> 
            <div className='cardtwo'>
                <div className='followers'>
                 <p className='TopFollowers'>{followers}</p>
                 <p className='BottomFollowers'>followers</p>
                </div>
                <div className='following'>
                 <p className='TopFollowing'>{following}</p>
                 <p className='BottomFollowing'>following</p>
                </div>
            </div>         
        
		    </div>
	    </div>
    </div>
 </div>