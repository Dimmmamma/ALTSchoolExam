import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import GitLogo from '../images/GitHub-Mark-Light-120px-plus.png';
import ErrorBoundary from './ErrorBoundary';



function App() {
  const [name, setName] = useState ('');
  const [avatar, setAvatar] = useState ('');
  const [userName, setUserName] = useState ('');
  const [followers, setFollowers] = useState ('');
  const [following, setFollowing] = useState ('');
  // const [repositories, setRepositories] = useState ('');
//   const [error, setError] = useState (null);

  useEffect(()=> {
    fetch("https://api.github.com/users/dimmmamma")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ avatar_url, name, login, public_repos, followers, following}) => {
    setAvatar(avatar_url);
    setName(name);
    setUserName(login);
    // setRepositories(public_repos);
    setFollowers(followers);
    setFollowing(following);
  }

  return (
    <ErrorBoundary>
  <div className="App">
  

    <div className='MainApp'>
      <div className="NavBar">
        <img src={GitLogo} alt="GitLogo" className='GitLogo'/>
        <div className='Error-test'><Link to= "/">Home</Link></div>
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
              
              {/* <p className='gitProfileLink'>Follow me @ <a href='https://github.com/Dimmmamma'>{userName}</a></p> */}
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
 </ErrorBoundary>
  );
}

export default App;
