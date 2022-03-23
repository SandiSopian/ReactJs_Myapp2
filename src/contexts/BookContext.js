import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducer/bookReducer";
// import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      // { title: "Basis Data", author: "Fathansyah", id: 1 },
      // { title: "Struktur Data", author: "Rosa", id: 2 },
    ],
    () => {
      const localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
    }
  );
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuidv1() }]);
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
