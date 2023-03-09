import { useState } from "react";
import { styled } from "@mui/material/styles";

import { Card, Box, CardContent, Typography } from "@mui/material/";

const Caja = styled(Card)`
  background-color: blue;
  height: 120px;
  min-width: 120px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`;

export const MyCard = ({ nombre }) => {
  // const [count, setCount] = useState(0);

  return (
    <Caja>
      {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent> */}
      <p>soy carta</p>
    </Caja>
  );
};
