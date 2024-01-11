import React, { useEffect, useState } from "react";
import ShowgithubprofileUserDetails from "./ShowgithubprofileUserDetails";
import "./Showgithubprofile.css";
import backgroundImg from "../images/backgroud.png";

export default function Showgithubprofile() {
  const [userName, setuserName] = useState("sumona8436");
  const [userData, setuserData] = useState(null);

  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setuserData(data);
      setuserName("");
    }
    console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);
  return (
    <div
      className="githubProfile-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="input-search-container">
        <input
          name="searchby-username"
          type="text"
          placeholder="Search By UserName"
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? (
        <ShowgithubprofileUserDetails userDetails={userData} />
      ) : null}
    </div>
  );
}
