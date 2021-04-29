import { useState } from "react";

import StepTwo from "./StepTwo";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const [result, setResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pwd1 !== pwd2) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setResult(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={result && "hidden"}>
        <h1>Create Account</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="Your Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="pwd1">Password</label>
        <input
          type="password"
          value={pwd1}
          name="pwd1"
          id="pwd1"
          placeholder="Type Password"
          onChange={(event) => {
            setPwd1(event.target.value);
          }}
        />
        <label htmlFor="pwd2">Confirm your password</label>
        <input
          type="password"
          value={pwd2}
          name="pwd2"
          id="pwd2"
          placeholder="Confirm Password"
          onChange={(event) => {
            setPwd2(event.target.value);
          }}
        />

        <button type="submit">Register</button>
      </form>
      <StepTwo
        name={name}
        email={email}
        pwd1={pwd1}
        result={result}
        setResult={setResult}
      />
    </>
  );
};

export default Form;
