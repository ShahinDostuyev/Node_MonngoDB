import axios from "axios";
import React, { useEffect, useState } from "react";
const moment = require('moment');

function Books() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        console.log(res.data);
        setbooks(res.data);
      })
      .catch((err) => {
        console.log("Error occured: ", err);
      });
  }, []);

  return (
    <>
    <h1>Book list</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Publish date</th>
            <th>Add date</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              return (
                <tr key={book._id}>
                  <td>{book._id}</td>
                  <td>{book.name}</td>
                  <td>{moment(book.publishDate).format("MMMM Do YYYY")}</td>
                  <td>{moment(book.addDate).format("MMMM Do YYYY")}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Books;
