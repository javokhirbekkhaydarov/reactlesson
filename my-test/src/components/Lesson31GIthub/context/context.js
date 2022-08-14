import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import mockUser from "./mockData/MockUser";
import mockRepos from "./mockData/MockRepo";
import mockFollowers from "./mockData/mockFollowers";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, isLoading }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
