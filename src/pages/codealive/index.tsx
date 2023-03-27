import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { NewSession } from "@/types/api/NewSession";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<NewSession | undefined>(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSession>();

  const onSubmit = async (data: NewSession) => {
    try {
      const response = await axios.post<NewSession>("/api/wsp/NewSession", {
        sessionName: data.sessionName,
      });
      console.log(response.data.sessionName);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hola</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("sessionName")}
          required
          label="Nombre de la session"
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </form>
      {response && <p>El nombre de la sesión es: {response.sessionName}</p>}
    </div>
  );
}
