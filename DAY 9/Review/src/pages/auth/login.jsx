import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { functionLogin } from "../../redux/slice/userSlice";
import { axiosInstance } from "../../api/axios";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axiosInstance()
      .get("/users", {
        params: { email, password },
      })
      .then((res) => {
        if (res.data?.length) {
          const { name } = res.data[0];
          alert("welcome " + name);
          delete res.data[0]?.password;
          dispatch(functionLogin(...res.data));

          localStorage.setItem("user", res.data[0].id);

          navigate("/");
        } else {
          alert("user not found");
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-[448px]">
          <h1 className="text-3xl">Masukan Akun Kamu</h1>
          <p className=" mt-5 text-[#989898] text-[13px]">
            Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
            langsung jadi deh!
          </p>

          <div className=" font-bold mt-5">Akun</div>
          <input
            type="email"
            className="px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Alamat@mail.com"
            id="email"
          ></input>

          <div className=" font-bold mt-5">Password</div>
          <input
            type="password"
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="**************"
            id="password"
          ></input>

          <button
            className=" rounded-lg mt-5 text-white bg-[#4F46E5] h-16"
            onClick={login}
          >
            login
          </button>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
