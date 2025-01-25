import styles from "./signIn.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TInputsValue } from "../../interfaces/signUpInterface";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatorio"),
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
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}></div>
      <div className={styles.containerRight}>
        <form className={styles.containerRight__form}>
          <span>Bem vindo</span>
          <h1 className={styles.containerRight__title}>
            Faça o login com sua conta
          </h1>

          <input name="email" type="text" placeholder="Email" />

          <input name="password" type="password" placeholder="Senha" />

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
