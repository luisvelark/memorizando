import Stack from "@mui/material/Stack";

import { useForm } from "react-hook-form";

import { UserName } from "../../common/UserName";
import { Password } from "../../common/Password";
import { Presentation } from "../../common/Presentation";
import { ButtonSbumit } from "../../common/BotonSubmit";

export function LoginView() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <Presentation title="INICIAR SESIÓN" />
        <UserName register={register} />
        <Password register={register} />
        <ButtonSbumit title="INGRESAR" />
      </Stack>
    </Stack>
  );
}
