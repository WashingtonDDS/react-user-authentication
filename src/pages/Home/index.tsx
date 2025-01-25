import { Header } from "../../components/Header";
import styles from "./home.module.css";
export function Home() {
  return (
    <div className={styles.container__home}>
      <Header />
      <div className={styles.content__home}>
        <form>
          <h2>Contas</h2>
          <input name="description" type="text" placeholder="Conta" />

          <input name="price" type="number" placeholder="Preço R$" />

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
