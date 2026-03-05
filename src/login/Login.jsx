function Login() {
  return (
    <form>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={emailValidateHandler}
        />
      </div>
      <div
        className={`control ${passwordState.isValid === false ? "invalid" : ""}`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={passwordValidateHandler}
        />
      </div>
      <div className="actions">
        <Button type="submit" disabled={!formIsValid}>
          Login
        </Button>
      </div>
    </form>
  );
}

export default Login;
