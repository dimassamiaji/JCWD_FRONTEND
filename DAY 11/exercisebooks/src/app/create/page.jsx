function Page() {
  return (
    <div className="flex-col">
      <div className="flex">
        <p>Book Name :</p>
        <input type="text" />
      </div>
      <div className="flex">
        <p>Author Name :</p>
        <input type="text" />
      </div>
      <div className="flex">
        <p>Price :</p>
        <input type="text" />
      </div>
    </div>
  );
}
export default Page;
