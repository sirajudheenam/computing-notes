import { useEffect, useState } from 'react';

import Token from './Token';
import Section from './Section';

import './amadeus.css';

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

const _cheapDestinationsResults = {
  data: [
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'MAD',
      departureDate: '2023-10-03',
      returnDate: '2023-10-14',
      price: {
        total: '97.81',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=MAD&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=MAD&departureDate=2023-10-03&returnDate=2023-10-14&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'LIS',
      departureDate: '2023-11-12',
      returnDate: '2023-11-15',
      price: {
        total: '105.58',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=LIS&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=LIS&departureDate=2023-11-12&returnDate=2023-11-15&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'OPO',
      departureDate: '2023-09-06',
      returnDate: '2023-09-19',
      price: {
        total: '119.55',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=OPO&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=OPO&departureDate=2023-09-06&returnDate=2023-09-19&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'LIN',
      departureDate: '2023-09-13',
      returnDate: '2023-09-17',
      price: {
        total: '122.65',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=LIN&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=LIN&departureDate=2023-09-13&returnDate=2023-09-17&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'TUN',
      departureDate: '2023-09-04',
      returnDate: '2023-09-19',
      price: {
        total: '137.18',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=TUN&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=TUN&departureDate=2023-09-04&returnDate=2023-09-19&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'RAK',
      departureDate: '2023-11-05',
      returnDate: '2023-11-16',
      price: {
        total: '141.00',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=RAK&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=RAK&departureDate=2023-11-05&returnDate=2023-11-16&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'ORY',
      destination: 'BCN',
      departureDate: '2023-12-03',
      returnDate: '2023-12-12',
      price: {
        total: '145.29',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=BCN&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=BCN&departureDate=2023-12-03&returnDate=2023-12-12&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'CDG',
      destination: 'FCO',
      departureDate: '2023-09-27',
      returnDate: '2023-10-03',
      price: {
        total: '147.46',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=FCO&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=FCO&departureDate=2023-09-27&returnDate=2023-10-03&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'CDG',
      destination: 'ATH',
      departureDate: '2024-01-08',
      returnDate: '2024-01-12',
      price: {
        total: '149.28',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=ATH&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=ATH&departureDate=2024-01-08&returnDate=2024-01-12&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
    {
      type: 'flight-destination',
      origin: 'CDG',
      destination: 'SAW',
      departureDate: '2023-09-18',
      returnDate: '2023-09-19',
      price: {
        total: '154.25',
      },
      links: {
        flightDates:
          'https://test.api.amadeus.com/v1/shopping/flight-dates?origin=PAR&destination=SAW&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&currency=EUR&viewBy=DURATION',
        flightOffers:
          'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=SAW&departureDate=2023-09-18&returnDate=2023-09-19&adults=1&nonStop=false&maxPrice=200&currency=EUR',
      },
    },
  ],
  dictionaries: {
    currencies: {
      EUR: 'EURO',
    },
    locations: {
      LIN: {
        subType: 'AIRPORT',
        detailedName: 'LINATE',
      },
      MAD: {
        subType: 'AIRPORT',
        detailedName: 'ADOLFO SUAREZ BARAJAS',
      },
      FCO: {
        subType: 'AIRPORT',
        detailedName: 'FIUMICINO',
      },
      ATH: {
        subType: 'AIRPORT',
        detailedName: 'ATHENS INT E VENIZELOS',
      },
      ORY: {
        subType: 'AIRPORT',
        detailedName: 'ORLY',
      },
      LIS: {
        subType: 'AIRPORT',
        detailedName: 'AIRPORT',
      },
      CDG: {
        subType: 'AIRPORT',
        detailedName: 'CHARLES DE GAULLE',
      },
      SAW: {
        subType: 'AIRPORT',
        detailedName: 'SABIHA GOKCEN',
      },
      TUN: {
        subType: 'AIRPORT',
        detailedName: 'CARTHAGE',
      },
      BCN: {
        subType: 'AIRPORT',
        detailedName: 'AIRPORT',
      },
      RAK: {
        subType: 'AIRPORT',
        detailedName: 'MENARA',
      },
      OPO: {
        subType: 'AIRPORT',
        detailedName: 'FRANCISCO SA CARNEIRO',
      },
    },
  },
  meta: {
    currency: 'EUR',
    links: {
      self: 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&departureDate=2023-08-07,2024-02-02&oneWay=false&duration=1,15&nonStop=false&maxPrice=200&viewBy=DESTINATION',
    },
    defaults: {
      departureDate: '2023-08-07,2024-02-02',
      oneWay: false,
      duration: '1,15',
      nonStop: false,
      viewBy: 'DESTINATION',
    },
  },
};

const TOKEN = 'zB9dvgS1QnuB6BUU6LAAzTbMBbsY';

export default function TestTravelApp() {
  return (
    <>
      {/* <div className="nav-bar">TravelApp</div> */}
      {/* <Token /> */}
      {/* <TravelForm />
      <TravelResults /> */}
      {/* <CheapTicketsForm /> */}
      {/* <Token /> */}
      <Section />
    </>
  );
}

function TravelForm() {
  return (
    <form>
      <label htmlFor="from">From</label>
      <input type="text" id="from"></input>
      <label htmlFor="to">To</label>
      <input type="text" id="to"></input>
      <label htmlFor="onward_date">Travel Date</label>
      <input type="date" id="onward_date"></input>
    </form>
  );
}

function TravelResults() {
  return <p>Travel Results</p>;
}

function CheapTicketsForm() {
  const [token, setToken] = useState('zB9dvgS1QnuB6BUU6LAAzTbMBbsY');
  const [origin, setOrigin] = useState('MAD');
  const [maxPrice, setMaxPrice] = useState('200');
  // const [cheapDestinations, setCheapDestinations] = useState({});

  // console.log(cheapDestinationsData);

  // useEffect(
  //   () => {
  //     var myHeaders = new Headers();
  //     myHeaders.append('Authorization', `Bearer ${token}`);

  //     var requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow',
  //     };

  //     async function fetchResults() {
  //       try {
  //         const res = await fetch(
  //           `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}&maxPrice=${maxPrice}`,
  //           requestOptions
  //         ); // fetch
  //         const data = await res.json();
  //         setCheapDestinations(data);
  //         console.log(data);
  //       } catch (error) {
  //         console.log(`error: ${error}`);
  //       } finally {
  //         console.log('finally: block ');
  //       }
  //     }
  //     fetchResults();
  //   }, //func
  //   [token, origin, maxPrice]
  // ); //useEffect

  console.log('cheapDestinationsData', _cheapDestinationsResults);
  console.log(Object.keys(_cheapDestinationsResults));
  console.log(_cheapDestinationsResults.data);
  console.log(_cheapDestinationsResults.data[0]); // {type: 'flight-destination', origin: 'ORY', destination: 'MAD', departureDate: '2023-10-03', returnDate: '2023-10-14' }
  console.log(Object.keys(_cheapDestinationsResults.data)); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // console.log(Object.keys(_cheapDestinationsResults.meta)); // [currency, links, defaults]
  console.log(Object.keys(_cheapDestinationsResults.meta.currency)); //['0', '1', '2']

  // console.log(Object.keys(_cheapDestinationsResults.meta.defaults));
  // console.log(Object.keys(_cheapDestinationsResults.meta.links));
  // console.log(Object.keys(_cheapDestinationsResults.dictionaries));
  // console.log(Object.keys(_cheapDestinationsResults.dictionaries.currencies));
  // console.log(Object.keys(_cheapDestinationsResults.dictionaries.locations));

  // console.log(_cheapDestinationsResults.dictionaries.currencies.EUR);

  function searchCheapPrice() {}
  return (
    <>
      <form className="search-bar">
        <h2>Cheap Destination Finder </h2>
        <label htmlFor="token" className="search-bar-label">
          Token
        </label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
        ></input>
        <label htmlFor="from" className="search-bar-label">
          Origin
        </label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
        ></input>
        <label htmlFor="max_price" className="search-bar-label">
          Maximum Price
        </label>
        <input
          type="text"
          id="max_price"
          value={maxPrice}
          onChange={setMaxPrice}
        ></input>
        <button onClick={searchCheapPrice}>Search</button>
      </form>
      <div>
        <h2>Results</h2>

        {_cheapDestinationsResults &&
          _cheapDestinationsResults.data.map((dest) => (
            <div className="results">
              <ul key={dest.links.flightOffers}>
                <li>Origin: {dest.origin}</li>
                <li>Destination: {dest.destination}</li>
                <li>departureDate: {dest.departureDate}</li>
                <li>returnDate: {dest.returnDate}</li>
                <li>
                  <a href={dest.links.flightDates}>Flight Dates </a>
                </li>
                <li>
                  <a href={dest.links.flightOffers}>Flight Dates </a>
                </li>
                <li>Price: {dest.price.total}</li>
              </ul>
            </div>
          ))}
        {/* {_cheapDestinationsResults.dictionaries.} */}
      </div>
    </>
  );
}
