import { useState } from 'react';
import Api from './Api';
import './App.css';

const App = () => {

  const api = new Api()

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let [resultMessage, setResultMessage] = useState("");
  let [errors, setErrors] = useState([]);
  let [loading, setLoading] = useState(false);

  const SubmitForm = async (e) => {
    e.preventDefault();

    setResultMessage("");
    setErrors([]);

    if(ValidateData())
    {
      setLoading(true);

      api.SubmitForm(firstName, lastName, email, message).then(results => {
        setResultMessage(results.data);
        setErrors(results.errors);
      }).catch(err => {
        setErrors(["An unknown error has occurred"]);
      }).finally(x => {
        setLoading(false);
      });
    }
  }

  const ValidateData = () => {
    let isValid = true;
    let validationErrors = [];

    if(firstName === null || firstName === "")
    {
      isValid = false;
      validationErrors.push("First name is required");
    }

    if(lastName === null || lastName === "")
    {
      isValid = false;
      validationErrors.push("Last name is required");
    }

    if(email === null || email === "")
    {
      isValid = false;
      validationErrors.push("Email is required");
    }
    else if (!/^[^@\s]+@[^@\s]+(\.[^@\s]+)+$/.test(email))
    {
      isValid = false;
      validationErrors.push("A valid email is required");
    }

    if(message === null || message === "")
    {
      isValid = false;
      validationErrors.push("Message is required");
    }

    setErrors(validationErrors);
    return isValid;
  }

  const GetLoadingButton = () => {
    if(loading)
    {
      return <button type="submit" disabled>Loading...</button>
    }
    else
    {
      return <button type="submit">Submit</button>
    }
  }

  return (
    <div className="App">
      <h1>Contact Us Form</h1>
      <form onSubmit={SubmitForm}>
        <div>
          <label>First Name</label>
          <input type="text" onChange={e => setFirstName(e.target.value)}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={e => setLastName(e.target.value)}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label>Message</label>
          <textarea rows="6" onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div>
          {GetLoadingButton()}
        </div>
        <div>
          <ul>
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
        <div>
          <label>{resultMessage}</label>
        </div>
      </form>
    </div>
  );
}

export default App;
