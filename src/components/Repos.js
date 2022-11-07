import { useEffect, useState } from "react";
import '../App.css';

const Repos = () => {
    const [users, setUsers] = useState ([]);
    const [page, setPage] = useState(1);
    const [name, setName] = useState ('');
    const [avatar, setAvatar] = useState ('');
    const [userName, setUserName] = useState ('');
    const [followers, setFollowers] = useState ('');
    const [following, setFollowing] = useState ('');
    const [repositories, setRepositories] = useState ('');

    useEffect(() => {
    try {
        
        fetch(`https://api.github.com/users/dimmmamma/repos?per_page=5&page=${page}`).then((response) => {
            return response.json()
        }).then(result => {
            setUsers(result.results)
        })
        .then(data => {
            setData(data);
          });
        
    } catch (error) {
        console.log(error);
    }
    }, [page]
    
       
    );

    const setData = ({ avatar_url, name, login, public_repos, followers, following}) => {
        setAvatar(avatar_url);
        setName(name);
        setUserName(login);
        setRepositories(public_repos);
        setFollowers(followers);
        setFollowing(following);
      }

 
    function nextPage() {
        setPage(prevPage => prevPage + 1);
      }

    function previousPage( ){
        
        if(page > 1) {
        setPage(prevPage => prevPage - 1)
        }
        else {
            return <h1>ERROR 404</h1>;
        }
    }


    return (<><div><ul>{users.map(user => <li key={user.email}>{user.name.title} {user.name.first} {user.name.last}</li>)}</ul>
     <button className='previous'onClick={previousPage}>Previous</button>
     <button className="Next" onClick={nextPage}>Next Page</button>
    </div></>)
}



export default Repos;