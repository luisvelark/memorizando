import Stack from "@mui/material/Stack";

import { useForm } from "react-hook-form";

// componentes de la pagina
import { Presentation } from "../../common/Presentation";
import { Date } from "../../Date";
import { UserName } from "../../common/UserName";
import { Email } from "../../common/Email";
import { Password } from "../../common/Password";
import { ButtonSbumit } from "../../common/BotonSubmit";

export function RegisterView() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(Register.email);
  // console.log(Register.password);
  // console.log(alertRegister, "en vista");

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <Presentation title="CREAR CUENTA" />

        <Date register={register} />
        <UserName register={register} />
        <Email register={register} />
        <Password register={register} />
        <ButtonSbumit title="REGISTRAR" />
      </Stack>
      {/* {alertRegister && (
        <MyAlert
          type="warning"
          delay={7000}
          msg="El usuario y/o la contraseña ingresada es incorrecta. Por favor, intenta nuevamente."
        />
      )} */}
    </Stack>
  );
}
