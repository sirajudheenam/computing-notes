import React, { useState, Fragment } from "react";
import '../stylesheets/style.css';

export function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      Using Fetch <br />
      <button onClick={apiGet}>Fetch data</button>
      {
        /* <pre>{JSON.stringify(data, null, 2)}</pre> */
      }
      {
        /* <ul>
        //     {data.map((item) => (
        //       <li key={item.id}>
        //         {item.userId} -  {item.title}
        //       </li>
        //     ))}
        //   </ul> */
      }
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colSpan="3">---</td>
          </tr>
        </tfoot>
      </table>
    </Fragment>
  );
}
