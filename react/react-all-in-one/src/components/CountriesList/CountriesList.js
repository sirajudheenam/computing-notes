import React from 'react'

// import { allCountries } from 'country-region-data';
import countryRegionData from 'country-region-data/dist/data-umd'
// import json from 'country-region-data/data.json';

// // Country Region Data
// let countriesList = allCountries[243];
let countryRegionDatum = countryRegionData[245]
// let countryJSON = json;

console.log(countryRegionDatum)
// console.log(countriesList);
// export { countriesList, countryRegionData, countryJSON };

function Countries() {
  return (
    <>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th> Code</th>
              <th>Total States</th>
            </tr>
          </thead>
          <tbody>
            {countryRegionData.map((c) => (
              <tr key={c.countryName}>
                <td>{c.countryName}</td>
                <td> {c.countryShortCode}</td>
                <td>{c.regions.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
function CountriesList() {
  return (
    <>
      <Countries />
    </>
  )
}

export default CountriesList
