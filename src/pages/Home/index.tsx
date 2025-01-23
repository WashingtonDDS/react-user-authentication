import { Header } from '../../components/Header'
import styles from './home.module.css'
export function Home() {
  return (
    <div className={styles.container__home}>
      <Header />
      <div className={styles.content__home}>

        <form>
          <h2>Perfil</h2>
          <input name="name" type="text" placeholder="Nome" />

          <input name="email" type="text" placeholder="Email" />

          <input name="password" type="password" placeholder="Senha" />

          <div className={styles.container__buttons}>
            <button className={`btn btn__positive ${styles.btn__register}`}>ATUALIZAR</button>
            <button className={`btn btn__negative ${styles.btn__cancel}`}>EXCLUIR</button>
          </div>
        </form>
      </div>
    </div>
  )
}