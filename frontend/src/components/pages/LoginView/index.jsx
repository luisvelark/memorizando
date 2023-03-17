import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { UserName } from "../../common/UserName";
import { Password } from "../../common/Password";
import { Presentation } from "../../common/Presentation";
import { ButtonSbumit } from "../../common/BotonSubmit";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../../../redux/actions";

export function LoginView() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    //llamada a la api de login
    dispatch(authenticateUser(true));
    navigate("/app/juego");
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
