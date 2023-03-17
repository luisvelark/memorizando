import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { UserName } from "../../common/UserName";
import { Password } from "../../common/Password";
import { Presentation } from "../../common/Presentation";
import { ButtonSbumit } from "../../common/BotonSubmit";
import { useLogin } from "../../../hooks/useLogin";

export function LoginView() {
  // const navigate = useNavigate();

  // const dispatch = useDispatch();
  const { register, handleSubmit, onSubmit } = useLogin();

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
