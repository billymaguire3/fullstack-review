import React from 'react'

const RepoListEntry = ({fullname, forks, repoUrl}) => {
  return (
    <div>
      <li>
        <a target="_blank" href={`${repoUrl}`}>{fullname}</a>
        <br></br>
        Number of Repo Forks: {forks}
      </li>
    </div>
  )
}

export default RepoListEntry