"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "./api/axios";
import LoopItem from "./components/loopItem";
import Link from "next/link";
import CreateCompo from "./components/createItem";

export default function Home() {
  const [book, setBook] = useState([]);
  const a = () =>
    axiosInstance()
      .get("/books")
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  useEffect(() => {
    a();
  }, []);
  return (
    <>
      <table className=" w-full ">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        {book.map((val, id) => (
          <LoopItem key={val.id} {...val} a={a} />
        ))}
      </table>
      <CreateCompo book={book} setBook={setBook} a={a} />
    </>
  );
}
