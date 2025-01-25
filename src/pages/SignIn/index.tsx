import styles from "./signIn.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TIsignIn } from "../../interfaces/signInInterface";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .required("O email é obrigatorio")
      .email("Email invalido"),
    password: yup
      .string()
      .required("A senha é obrigatorio")
      .min(8, "A senha precisa ter pelo menos 8 caracteres"),
  })
  .required();

export function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSignIn = async (inputsValue: TIsignIn) => {
    try {
      const { data } = await api.post("/login", {
        email: inputsValue.email,
        senha: inputsValue.password,
      });
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.usuario));

        navigate("/home");
      }
    } catch (err) {
      alert("Ocorreu um erro");
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}></div>
      <div className={styles.containerRight}>
        <form
          onSubmit={handleSubmit(handleFormSignIn)}
          className={styles.containerRight__form}
        >
          <span>Bem vindo</span>
          <h1 className={styles.containerRight__title}>
            Faça o login com sua conta
          </h1>

          <input {...register("email")} type="text" placeholder="Email" />
          <p>{errors.email?.message}</p>
          <input
            {...register("password")}
            type="password"
            placeholder="Senha"
          />
          <p>{errors.password?.message}</p>
          <button className={`btn btn__positive ${styles.btn__login}`}>
            LOGIN
          </button>
        </form>

        <div className={styles.register__link}>
          <span className={styles.register__link__text}>Não tem cadastro?</span>
          <a href="#">Clique aqui!</a>
        </div>
      </div>
    </main>
  );
}
