import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { loginSuccess, loginStart, loginFailure } from "@/redux/login/slice";
import swal from "sweetalert";

function useRegister() {
  const { loading } = useSelector((state) => state.login);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
    nama: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      dispatch(loginStart());
      const response = await axios.post(
        "http://103.27.206.237:10102/api/guest/pelamar/registrasi/biodata",
        formValues
      );
      dispatch(loginSuccess(response.data));
      swal("Anda berhasil login", "Silahkan klik tombol berikut", "success");
      router.push("/");
    } catch (error) {
      dispatch(loginFailure());
      swal(
        "Anda gagal login",
        "Harap periksa kembali email dan password anda",
        "error"
      );
    }
  };

  return {
    formValues,
    loading,
    setFormValues,
    handleSubmit,
    isSubmit,
  };
}

export default useRegister;
