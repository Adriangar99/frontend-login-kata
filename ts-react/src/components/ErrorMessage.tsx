import { translateError } from "../utils/translateError";

type ErrorMessageProps = {
  message: string | null;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <>{message && <p>{translateError(message)}</p>}</>;
};
