export default function Newsletter() {
  return (
    <div>
      <h3>Newsletter</h3>
      <p>Sign up for our newsletter</p>
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input data-testid="emailinput" id="email" name="email" />
          <label>
            Password
            <input data-testid="passwordinput" type="password"></input>
          </label>
          <button data-testid="submitbutton" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
