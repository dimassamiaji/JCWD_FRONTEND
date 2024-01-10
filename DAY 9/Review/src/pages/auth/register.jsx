import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const inputHandler = (e) => {
  //   const key = e.target.id;
  //   const { value } = e.target;
  //   setUser((prev) => {
  //     return {
  //       ...prev,
  //       [key]: value,
  //     };
  //   });
  // };

  // const [show, setShow] = useState(false);

  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email("bukan email"),
      password: Yup.string().required().min(5, "minimal 5 karakter"),
    }),
    onSubmit: () => {
      mendaftar();
    },
  });

  // useEffect(() => {
  //   console.log(user);
  //   if (user.email && user.password && user.name) setShow(true);
  //   else setShow(false);
  // }, [user]);
  const nav = useNavigate();
  const mendaftar = () => {
    const user = formik.values;
    if (user.name && user.password && user.email) {
      axiosInstance()
        .post("/users", user)
        .then((res) => {
          console.log(res.data);
          formik.resetForm();
          alert("register berhasil");
          nav("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(formik.values);
  });
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-[448px]">
          <h1 className="text-3xl">Bikin Akun Baru</h1>
          <p className=" mt-5 text-[#989898] text-[13px]">
            Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
            langsung jadi deh!
          </p>

          <div className=" font-bold mt-5">Name Lengkap</div>
          <input
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Dimskuy"
            onChange={formik.handleChange}
            id="name"
            value={formik.values.name}
          ></input>
          <div className=" my-1 text-red-500">{formik.errors.name}</div>

          <div className=" font-bold mt-5">Email</div>
          <input
            type="email"
            className="px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Alamat@mail.com"
            onChange={formik.handleChange}
            id="email"
            value={formik.values.email}
          ></input>
          <div className=" my-1 text-red-500">{formik.errors.email}</div>

          <div className=" font-bold mt-5">Password</div>
          <input
            type="password"
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="**************"
            onChange={formik.handleChange}
            id="password"
            value={formik.values.password}
          ></input>
          <div className=" my-1 text-red-500">{formik.errors.password}</div>

          <p className=" mt-5 text-[#989898] text-[13px]">
            Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
            Privacy Policy dari Namanyajugabelajar.io!
          </p>
          <button
            className=" rounded-lg mt-5 text-white bg-[#4F46E5] h-16"
            onClick={formik.handleSubmit}
          >
            Mendaftar
          </button>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
