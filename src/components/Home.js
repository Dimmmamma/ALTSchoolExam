import React from 'react';
import { Link, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '../App.css';
import GitLogo from '../images/GitHub-Mark-120px-plus.png';
import Repos from './Repos';
import ErrorBoundary from './ErrorBoundary';


function App() {
  const [name, setName] = useState ('');
  const [avatar, setAvatar] = useState ('');
  const [userName, setUserName] = useState ('');
  const [followers, setFollowers] = useState ('');
  const [following, setFollowing] = useState ('');
  const [repositories, setRepositories] = useState ('');
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
    setRepositories(public_repos);
    setFollowers(followers);
    setFollowing(following);
  }

  return (
  <div className="App">
  

    <div className='MainApp'>
      <div className="NavBar">
        <img src={GitLogo} alt="GitLogo" className='GitLogo'/>
      </div>

      <div className="main">
		    <div className="mail">
			    <div className="cover"> </div>
			    <div className="image"> 
            <div className='gitAvatar'>
              <div className='parent-image'>
              {/* <img src={GitLogo} alt="GitLogo" className='bg-logo'/>  */}
              <img src={avatar} alt="Git Avatar" className='avatar'/>
              </div>
              <h1 className='gitName'>{name}</h1>
              
                Click to see her {repositories} repositories.
              
              <p className='gitProfileLink'>Follow me @ <a href='https://github.com/Dimmmamma'>{userName}</a></p>
            </div> 
            <div className='cardtwo'>
              <div className='followers'>{followers}followers</div>
              <div className='following'>{following}following</div>
            </div>         
          </div>
		    </div>
	    </div>
    </div>
 </div>
  );
}

export default App;
