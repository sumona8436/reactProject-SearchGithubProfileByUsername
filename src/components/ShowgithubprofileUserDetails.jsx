import React from "react";

export default function ShowgithubprofileUserDetails({ userDetails }) {
  const { avatar_url, bio, public_repos, name, login, followers } = userDetails;
  return (
    <div className="user-container">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="user-info-container">
        <div>
          <p>: Profile : </p>
          <p>{bio}</p>
        </div>
        <div>
          <p>: Public Repository : </p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>: Followers : </p>
          <p>{followers}</p>
        </div>
      </div>
    </div>
  );
}
