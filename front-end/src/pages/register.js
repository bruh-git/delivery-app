function Register() {
  return (
    <div className="RegisterPage">
      <form className="RegisterForm">
        <h3>Nome</h3>
        <input
          name="name"
          type="text"
          placeholder="Seu Nome"
          data-testid="common_register__input-name"
        />
        <h3>Email</h3>
        <input
          name="email"
          type="email"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-name"
        />
      </form>
    </div>
  );
}

export default Register;
