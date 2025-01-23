import styles from './signIn.module.css'
export function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}>
      </div>
      <div className={styles.containerRight}>
        <form className={styles.containerRight__form}>


          <span>Bem vindo</span>
          <h1 className={styles.containerRight__title}>Faça o login com sua conta</h1>

          <input name="email" type="text" placeholder="Email" />

          <input name="password" type="password" placeholder="Senha" />

          <button className={`btn btn__positive ${styles.btn__login}`}>LOGIN</button>

        </form>

        <div className={styles.register__link}>
          <span className={styles.register__link__text}>Não tem cadastro?</span>
          <a href="#">Clique aqui!</a>
        </div>
      </div>

    </main>

  )
}
