import React, { useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { GuestBookEntryForm } from "../GuestBookEntryForm";
import { useStoreState, useStoreActions } from "../../hooks/index";
import useStyles from "./styles";

export const Home: React.FC = () => {
  const classes = useStyles();
  const entries = useStoreState((state) => state.guestbook.entries);
  const getEntries = useStoreActions((state) => state.guestbook.getEntries);

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div>
      <GuestBookEntryForm />
      {entries.map((entry) => (
        <Card className={classes.entryCard} key={entry.content}>
          <CardContent>
            <Typography variant="h2">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption">{entry.submitted}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
