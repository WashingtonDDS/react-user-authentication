import styles from "./signUp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}>
        <form className={styles.containerLeft__form}>
          <h2 className={styles.containerLeft__title}>Cadastre-se</h2>

          <input name="name" type="text" placeholder="Nome" />

          <input name="email" type="text" placeholder="Email" />

          <input name="password" type="password" placeholder="Senha" />

          <button className={`btn btn__positive ${styles.btn__register}`}>
            CADASTRAR
          </button>
        </form>

        <div className={styles.login__link}>
          <span>Já tem cadastro?</span>
          <a href="#" className={styles.login__link__text}>
            Clique aqui!
          </a>
        </div>
      </div>
      <div className={styles.containerRight}></div>
    </main>
  );
}
