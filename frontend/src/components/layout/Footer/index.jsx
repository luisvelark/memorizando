import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material/";

const MyFooter = styled("footer")`
  height: 30px;
  width: 100%;
  padding: 1em;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export function Footer() {
  return (
    <MyFooter>
      <Typography variant="h7" component="p">
        © {new Date().getFullYear()} Luis Velasquez. Todos los derechos
        reservados.
      </Typography>
    </MyFooter>
  );
}
