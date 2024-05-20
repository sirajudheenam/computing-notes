import { useState, useEffect } from 'react';
export default function Token() {
  const [token, setToken] = useState({});
  const [expiry, setExpiry] = useState(null);

  const CLIENT_ID = 'mThDf261fJ3qVDWnwGPiPCvuKmZafpB5';
  const CLIENT_SECRET = 'g9yFZq1yGtqUBXJc';
  const TOKEN_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  async function fetchToken() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'client_credentials');
    urlencoded.append('client_id', CLIENT_ID);
    urlencoded.append('client_secret', CLIENT_SECRET);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    try {
      const res = await fetch(TOKEN_URL, requestOptions);
      const token = await res.json();
      console.log(`token USERNAME : ${token.username}`);
      setToken(token);
    } catch (e) {
      console.log('error', e.message);
    } finally {
      console.log('final code to execute');
    }
  }

  useEffect(() => {
    setToken(fetchToken);
  }, []);

  return (
    <>
      <TokenDetails token={token} />
    </>
  );
}

function TokenDetails({ token }) {
  return (
    <ul>
      <li>type: {token.type} </li>
      <li>username: {token.username} </li>
      <li>application_name: {token.application_name} </li>
      <li>client_id: {token.client_id} </li>
      <li>token_type: {token.token_type} </li>
      <li>access_token: {token.access_token} </li>
      <li>expires_in: {Number(token.expires_in)} </li>
      <li>state: {token.state} </li>
      <li>scope: {token.scope} </li>
    </ul>
  );
}

// Test keys | Base URL: test.api.amadeus.com
// API Key: mThDf261fJ3qVDWnwGPiPCvuKmZafpB5
// API Secret: g9yFZq1yGtqUBXJc

// curl --location 'https://test.api.amadeus.com/v1/security/oauth2/token' \
// --header ''\''Content-Type'\'': '\''application/x-www-form-urlencoded'\''' \
// --header 'Content-Type: application/x-www-form-urlencoded' \
// --data-urlencode 'grant_type=client_credentials' \
// --data-urlencode 'client_id=mThDf261fJ3qVDWnwGPiPCvuKmZafpB5' \
// --data-urlencode 'client_secret=g9yFZq1yGtqUBXJc'

// const sample_token_reponse = {
//   type: 'amadeusOAuth2Token',
//   username: 'buzzmesam@gmail.com',
//   application_name: 'TestTravelApp',
//   client_id: 'mThDf261fJ3qVDWnwGPiPCvuKmZafpB5',
//   token_type: 'Bearer',
//   access_token: '7fCACpMoyEAA3AFXFl0893ycjeAA',
//   expires_in: 1799,
//   state: 'approved',
//   scope: '',
// };
