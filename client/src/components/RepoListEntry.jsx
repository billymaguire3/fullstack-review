import React from 'react'

const RepoListEntry = ({fullname, forks}) => {
  return (
    <div>
      <li>Repo Name: {fullname} <br></br>Number of Repo Forks: {forks}</li>
    </div>
  )
}

export default RepoListEntry