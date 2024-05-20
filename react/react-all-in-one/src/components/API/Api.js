// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
// https://api.publicapis.org/entries
// https://rapidapi.com/hub
// https://github.com/public-api-lists/public-api-lists
// https://publicapis.io/

https: import React, { useState, useEffect } from 'react';
export default function Api() {
  const [data, setData] = useState([]);
  const items = data.items;
  const metadata = data.metadata;
  const api_info = data.api_info;

  const [stations, setStations] = useState([]);
  const [timestamp, setTimestamp] = useState(null);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    if (typeof data.items === 'object') {
      setTimestamp(data.items[0].timestamp);
      setReadings(data.items[0].readings);
      setStations(data.metadata.stations);
    }
    console.log(`data keys: ${Object.keys(data)}`);
    console.log(`data values: ${Object.values(data)}`);

    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
      for (const [k1, v1] of Object.entries(value)) {
        console.log(`${k1}: ${v1}`);
      }
    }
  }, [data]);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(
        'https://api.data.gov.sg/v1/environment/air-temperature'
      );
      const results = await response.json();
      setData(results);
    }
    fetchData();
    // console.log(data);
  }, []);

  return (
    <>
      <h1>API List</h1>
      <button>FETCH IT</button>
      <div>
        {stations.length > 0 && (
          <Stations stations={stations} readings={readings} />
        )}
        {readings.length > 0 && <Readings readings={readings} />}
      </div>
    </>
  );
}

function Stations({ stations, readings }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <td>ID </td>
          <td>Name</td>
          <td>Device ID</td>
          <td> LONGTITUDE</td>
          <td> LATITUDE</td>
          <td>TEMP.</td>
        </tr>
      </thead>

      <tbody>
        {stations?.map((station) => (
          <tr key={station.id}>
            <td>{station.id}</td>
            <td>{station.name}</td>
            <td>{station.device_id}</td>
            <td>{station.location.longitude}</td>
            <td>{station.location.latitude}</td>
            <td>{getTemperature(readings, station.device_id)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getTemperature(readings, id) {
  const filtered_reading = readings.filter(
    (reading) => reading.station_id === id
  );
  return filtered_reading[0].value;
}

function Readings({ readings }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <td>Station ID</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        {readings.length > 0 &&
          readings.map((item) => (
            <tr key={item.station_id}>
              <td>{item.station_id}</td>
              <td>{item.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
