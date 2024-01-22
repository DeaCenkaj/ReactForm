import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form>
        <div>
          <label>
            First Name:
            <input type="text" name="firstName" value={firstName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
          </label>
        </div>
      </form>

      <div>
        <h3>Form Data:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default App;
