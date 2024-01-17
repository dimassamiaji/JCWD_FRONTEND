import { useState } from "react";
import { axiosInstance } from "../api/axios";

function LoopItem({ id, name, author, price, a }) {
  const [edit, setEdit] = useState(false);
  if (!edit) {
    return (
      <tr>
        <td>{name}</td>
        <td>{author}</td>
        <td>IDR {Number(price)?.toLocaleString("id-ID")}</td>
        <td className="text-center">
          <button
            className=" bg-slate-500 px-4 py-2 mx-5"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </button>
          <button
            className=" bg-red-600 px-4 py-2"
            onClick={() => delete (id, a)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <input type="text" id="name" defaultValue={name} />
        </td>
        <td>
          <input type="text" id="author" defaultValue={author} />
        </td>
        <td>
          <input type="text" id="price" defaultValue={price} />
        </td>
        <td className="text-center">
          <button
            className=" bg-slate-500 px-4 py-2 mx-5 "
            onClick={() => edit(id, edit, setEdit, a)}
          >
            Edit
          </button>
          <button
            className=" bg-red-600 px-4 py-2"
            onClick={() => setEdit(!edit)}
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}
function editNih(id, edit, setEdit, a) {
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const price = document.getElementById("price").value;
  axiosInstance()
    .patch("/books/" + id, {
      name: name,
      author: author,
      price: price,
    })
    .then((res) => {
      a(); //ini buat setBook biar client bisa lihat perubahan
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setEdit(false);
    });
}
function deleteNih(id, a) {
  axiosInstance()
    .delete("/books/" + id)
    .then((res) => {
      a();
    })
    .catch((err) => console.log(err));
}
export default LoopItem;
