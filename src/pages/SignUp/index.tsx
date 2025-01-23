import styles from './signUp.module.css'
export function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}>
        <form className={styles.containerLeft__form}>

          <h2 className={styles.containerLeft__title}>Cadastre-se</h2>

          <input name="name" type="text" placeholder="Nome" />

          <input name="email" type="text" placeholder="Email" />

          <input name="password" type="password" placeholder="Senha" />

          <button className={`btn btn__positive ${styles.btn__register}`}>CADASTRAR</button>

        </form>

        <div className={styles.login__link}>
          <span>Já tem cadastro?</span>
          <a href="#" className={styles.login__link__text}>Clique aqui!</a>
        </div>
      </div>
      <div className={styles.containerRight}>
      </div>
    </main>

  )
}
