import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material/";

// const Caja = styled(Card)`
//   background-color: gris;
//   height: 120px;
//   min-width: 120px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(0.95);
//   }
// `;

export function ButtonSbumit({ title }) {
  return (
    <Box sx={{ paddingTop: "2em" }}>
      <Button
        // onClick={handleSubmit}
        variant="contained"
        type="submit"
        sx={{
          textTransform: "none",
          borderRadius: "15px",
          padding: "1em 3em",
          lineHeight: "16px",
          backgroundColor: "#00838F",
          fontFamily: "roboto",
        }}
      >
        {title}
      </Button>
    </Box>
  );
}
