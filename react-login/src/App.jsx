function App() {

  return (
    <>
      <div className="container">
        <div className="login-page">
          <img className="login-logo" src="/logo.png" alt="login logo" />
          <h1 className="login-title" >login</h1>
          <div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
