import { axiosInstance } from "../api/axios";

function CreateCompo({ book, setBook, a }) {
  return (
    <div className=" w-1/4 my-4">
      <form id="formnih">
        <input
          type="text"
          placeholder="Book Name"
          className="my-2"
          id="cname"
        />
        <input
          type="text"
          placeholder="Author Name"
          className="my-2"
          id="cauthor"
        />
        <input type="text" placeholder="Price" className="my-2" id="cprice" />
        <button
          className=" bg-yellow-600 px-4 py-2 my-2"
          onClick={(e) => createBook(e, a)}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateCompo;

function createBook(event, a) {
  event.preventDefault();
  const name = document.getElementById("cname").value;
  const author = document.getElementById("cauthor").value;
  const price = document.getElementById("cprice").value;
  axiosInstance()
    .post("/books/", {
      name: name,
      author: author,
      price: price,
    })
    .then((res) => {
      a(); //ini setBook, biar client bisa lihat perubahan
    })
    .catch((err) => console.log(err))
    .finally(() => {
      document.getElementById("formnih").reset();
    });
}
