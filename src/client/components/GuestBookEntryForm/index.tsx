import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";
import { GuestBookEntry } from "../../model/GuestBook";
import { useStoreActions } from "../../hooks/index";

export const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  const createEntry = useStoreActions((state) => state.guestbook.createEntry);

  const GuestBookEntrySchema = yup.object().shape({
    name: yup.string().trim().required("A name is required."),
    content: yup
      .string()
      .trim()
      .min(10 /* second param will add custom error msg for this validation */)
      .max(200)
      .required(),
  });

  const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
    validationSchema: GuestBookEntrySchema,
  });

  const onSubmit = (data: GuestBookEntry): void => {
    createEntry(data);
    reset();
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
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
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
        error={!!errors.content}
        helperText={errors.content && errors.content.message}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" color="primary" variant="contained">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};
