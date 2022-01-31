import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform';
//To use repositoryName on JS ewe use "{}" -> {dataName}

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://google.com'
}

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Repository List</h1>

      <RepositoryItem repository={repository} />
      
    </section>
  );
}
