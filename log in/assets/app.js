import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [login, setLogin] = useState({ username: '', password: '' });
  const [signup, setSignup] = useState({ name: '', email: '', address: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginChange = e => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleSignupChange = e => {
    setSignup({ ...signup, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    // Example validation
    if (login.username === 'admin' && login.password === 'password') {
      setError('');
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Example sign up logic
    alert('Sign up successful!');
    setShowSignUp(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {!showSignUp ? (
        <div className="card p-4 shadow" style={{ minWidth: 350, background: '#fff', color: '#000', border: '1px solid #000' }}>
          <h2 className="text-center mb-4" style={{ color: '#000' }}>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label" style={{ color: '#000' }}>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={login.username}
                onChange={handleLoginChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#000' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={login.password}
                onChange={handleLoginChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            {error && <div className="alert alert-danger py-1">{error}</div>}
            <button type="submit" className="btn btn-primary w-100" style={{ background: '#000', borderColor: '#000' }}>Log In</button>
          </form>
          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <button className="btn btn-link text-primary p-0" onClick={() => setShowSignUp(true)}>Sign up</button>
          </div>
        </div>
      ) : (
        <div className="card p-4 shadow" style={{ minWidth: 350, background: '#fff', color: '#000', border: '1px solid #000' }}>
          <h2 className="text-center mb-4" style={{ color: '#000' }}>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: '#000' }}>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={signup.name}
                onChange={handleSignupChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#000' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={signup.email}
                onChange={handleSignupChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label" style={{ color: '#000' }}>Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={signup.address}
                onChange={handleSignupChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#000' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={signup.password}
                onChange={handleSignupChange}
                required
                style={{ color: '#000', background: '#fff', borderColor: '#000' }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ background: '#000', borderColor: '#000' }}>Sign Up</button>
          </form>
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <button className="btn btn-link text-primary p-0" onClick={() => setShowSignUp(false)}>Log in</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
