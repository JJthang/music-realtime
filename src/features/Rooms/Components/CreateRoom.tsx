import { Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

type Props = {};

const CreateRoom = (props: Props) => {
  return (
    <React.Fragment>
      <Fab sx={{
        position: 'absolute',
        bottom: 20,
        right: '45%',
        fontSize: '2rem'
      }} aria-label={"Add"}  color={"primary"}>
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default CreateRoom;
