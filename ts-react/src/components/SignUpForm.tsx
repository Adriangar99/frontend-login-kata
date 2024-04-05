import { useEffect, useState } from "react";
import { InputField } from "../components/InputField.js";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { SignUpUseCase } from "../UseCases/SignUpUseCase";
import { ErrorMessage } from "./ErrorMessage.js";

export const SignUpForm = () => {
  const useCase = new SignUpUseCase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    useCase
      .execute({ email, password })
      .then(() => {
        navigate("/success");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
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
      <ErrorMessage message={errorMessage} />
      <Button title="Signup" />
    </form>
  );
};
