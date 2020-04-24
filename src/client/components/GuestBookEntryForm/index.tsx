import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";

export const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.formContainer} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Standard"
        name="standard"
        fullWidth
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        multiline
        rows={3}
        label="Content"
        name="content"
        fullWidth
        variant="outlined"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};
