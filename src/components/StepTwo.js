const StepTwo = ({ name, email, pwd1, result, setResult }) => {
  return (
    <div className={`result ${!result && "hidden"}`}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {pwd1}</p>
      <button
        type="submit"
        onClick={() => {
          setResult(false);
        }}
      >
        Edit Your Information
      </button>
    </div>
  );
};

export default StepTwo;
