import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

//useEffect -> Create callback functions

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://google.com'
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  //2 argments: 1 - The Function, 2 - What To Watch For Changes
  useEffect(() => {
    //Call this function when repositories changed
    fetch('https://api.github.com/users/daniloparkour/repos')
      .then(resp => resp.json()) //Convert the responde to json
      .then(data => setRepositories(data)) //When json convertion is finished (data is the result)
  }, []);

  return(
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repository => 
          <RepositoryItem key={repository.name} repository={repository} />
        )}
      </ul>
      
    </section>
  );
}
