import './Error.css';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => (
  <div className="error">
    <span>{props.message}</span>
  </div>
);
