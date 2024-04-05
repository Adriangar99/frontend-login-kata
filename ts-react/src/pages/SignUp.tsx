import { useEffect, useState } from "react";
import "./SignUp.css";
import { InputField } from "../components/InputField.js";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { translateError } from "../utils/translateError.js";
import { useNavigate } from "react-router-dom";
import { SignUpUseCase } from "../UseCases/SignUpUseCase";

export const SignUp = () => {
  const useCase = new SignUpUseCase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  return (
    <main className="signup-container">
      <form
        className="signup-form"
        onSubmit={(event) => {
          event.preventDefault();

          useCase
            .execute({ email, password })
            .then(() => {
              navigate("/success");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        <Title>Sign up with email</Title>
        <p>Enter your email address to create an account.</p>

        <InputField
          id="email"
          labelText="Your email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputField
          id="password"
          labelText="Your password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        {errorMessage && <p>{translateError(errorMessage)}</p>}
        <Button title="Signup" />
      </form>
    </main>
  );
};
