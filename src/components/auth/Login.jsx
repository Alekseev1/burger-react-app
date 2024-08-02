const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Авторизация</h2>
        <p>Введите логин и пароль GitHub</p>
        <button className="github" onClick={() => props.authenticate()}>
          Войти
        </button>
      </nav>
    </div>
  );
};

export default Login;
