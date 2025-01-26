import styles from "./home.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TTransaction } from "../../interfaces/homeInterface";
import transactionsApi from "../../services/transactionsApi";

const schema = yup
  .object({
    description: yup.string().required("A descrição é obrigatória"),
    price: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .required("O preço é obrigatorio"),
  })
  .required();
export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTransaction = async (inputsValue: TTransaction) => {
    try {
      const { data } = transactionsApi.post("/transactions", {
        id: crypto.randomUUID(),
        description: inputsValue.description,
        price: inputsValue.price,
      });
    } catch (err) {
      alert("Ocorreu um erro");
    }
  };

  return (
    <div className={styles.container__home}>
      <div className={styles.content__home}>
        <form onSubmit={handleSubmit(addTransaction)}>
          <h2>Contas</h2>
          <input {...register("description")} type="text" placeholder="Conta" />
          <p>{errors.description?.message}</p>
          <input {...register("price")} type="number" placeholder="Preço R$" />
          <p>{errors.price?.message}</p>
          <button className={`btn btn__positive ${styles.btn__register}`}>
            CADASTRAR
          </button>
        </form>
        <ul className={styles.transactions}>
          <li>Internet - R$ 100</li>
        </ul>
      </div>
    </div>
  );
}
