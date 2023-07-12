import React, { useState, useEffect } from "react"

export function GitHubFetch({ login }) {
  const [data, setData] = useState([]); //null or " "
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log("GitHubFetch component also mounted", data)
  // });

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); // If login changes, call this useEffect function

   if (loading) return <h1>Loading data ....</h1>;

   if (error)
    return <pre>{JSON.stringify(error, null, 2)} </pre>;

  if (!data) return null;

  if (data.message === "Not Found") {
    return (<div>{JSON.stringify(data)}</div>)
  } else {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} height={200} />
      </div>
    );
  }

}
