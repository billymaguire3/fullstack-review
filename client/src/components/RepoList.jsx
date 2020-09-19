import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = ({repos}) => {

  const mappedRepos = repos.map((repo, key) => (
    <RepoListEntry
      fullname={repo.full_name}
      key={`${repo.full_name} ${key}`}
    />
  ))

  return (

  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <ul>
      {mappedRepos}
    </ul>
  </div>
  )
}

export default RepoList;