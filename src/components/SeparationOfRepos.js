import { useEffect, useState } from "react";
import '../style.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import GitLogo from '../images/GitHub-Mark-Light-120px-plus.png';



const SeparationOfRepos = () => {
    const [users, setUsers] = useState ([]);
    const [page, setPage] = useState(1);
   

    useEffect(() => {
    
        fetch(`https://api.github.com/users/dimmmamma/repos?per_page=4&page=${page}`).then((response) => {
            return response.json()
        }).then(result => {
            setUsers(result)
        }).catch (error => {
            console.log(error);
        })
        // .then(data => {
        //   setData(data);
        // });
        
    
    }, [page]
    
       
    );

 

 
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

    

    return (
    <>

<div className="App">
  

  <div className='MainApp-pagi'>
      <div className="NavBar">
         <img src={GitLogo} alt="GitLogo" className='GitLogo'/>
         <div className='Error-test'>ErrorBoundary Test</div>
         <div className='Contact'>Contact Page</div>
      </div>

        
      <div className="pagination-div">
         {users.length && users.map(user => {
             return (
                <div className="pagination-style" key={user.id}>
                    <div className="image-pagi"> 
                        <div className='gitAvatar-pagi'>
                            <div className='parent-image-pagi'>
                                <img src={GitLogo} alt="Git Avatar" className='avatar-pagi'/>
                            </div>

                            <h1 className='gitName-pagi' >{user.name}</h1>
                       </div>
                    </div> 
                    {/* <div className="description-pagi">
                        <p> Description: {user.description} </p>
                    </div> */}


                    <div className="language-and-visibility-pagi" >
                    <p className="language-pagi" >
                        Language: {user.language}
                   </p>
            
                   <p className="visibility-pagi" >
                       Visibility: {user.visibility}
                   </p>
                   </div>

                   <div className="forks-and-watchers-pagi" >
                       <p className="forks-pagi" >
                        Forks: {user.forks}
                       </p>
                 
                       <p className="watchers-pagi" >
                        Watchers: {user.watchers}
                       </p>
                   </div>


                   <div className="views-pagi">
                    
                       <button className="gitview-pagi" >
                            <a href= {user.html_url}> GITHUB</a>
                       </button>
                       <Link to= "/Repos" key={user.id}> 
                          <button className='repos-pagi'>EXPAND</button> 
                       </Link>
              

                   </div>
               </div>
                                    );
                                }
                                
                                
                                                                     )}
                                                                     </div> 
                             <div className="buttons-pagi">                                        
                            <button className='previous'onClick={previousPage}> &#9001; </button>
                            <button className="Next" onClick={nextPage}> &#9002; </button>
                            </div>
       
       
                            
            {/* <p className='para1'> "...@{userName} is a Frontend Developer curious about the intersection of Tech and Pharmacology given her background as a Pharmacology major." 
            </p> */}
            
            {/* <Link to= "/Repos"> <button className='repos'>VIEW REPOSITORIES</button> </Link> */}
    </div> 
      
 </div>
      
 

    
                           
                            



    </>
    )
}

export default SeparationOfRepos;

{/* <div className="pagination-div">
{users.length && users.map(user => {
    return (
        <div className="pagination-style">
        <p className="pagination" key={user.id}>
         {user.full_name}
         {user.repos_url}
        </p>
        </div>
    );
}
                                     )}

                                     <button className='previous'onClick={previousPage}>Previous</button>
                            <button className="Next" onClick={nextPage}>Next Page</button>
       
</div>  */}