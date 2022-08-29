import { TextField, Button } from "@mui/material";

interface InputFieldProps {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

function TodoInputField(props: InputFieldProps) {
  const { input, handleChange, handleSubmit } = props;

  return (
    <>
      <TextField name="input" value={input} onChange={handleChange} />
      <Button onClick={handleSubmit}>ADD</Button>
    </>
  );
}

export default TodoInputField;
