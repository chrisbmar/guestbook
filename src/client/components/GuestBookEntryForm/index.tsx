import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";
import { GuestBookEntry } from "../../model/GuestBook";

export const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<GuestBookEntry>();
  const onSubmit = (data: GuestBookEntry): void => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.formContainer}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Name"
        name="name"
        fullWidth
        variant="outlined"
        inputRef={register}
      />
      <TextField
        id="standard-basic"
        multiline
        rows={3}
        label="Content"
        name="content"
        fullWidth
        variant="outlined"
        inputRef={register}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" color="primary" variant="contained">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};
