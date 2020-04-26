import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { GuestBookEntryForm } from "../GuestBookEntryForm";
import { GuestBookEntry } from "../../model/GuestBook";
import useStyles from "./styles";

interface HomeProps {
  entries: GuestBookEntry[];
  createEntry(data: GuestBookEntry): void;
}

export const Home: React.FC<HomeProps> = ({ entries, createEntry }) => {
  const classes = useStyles();

  return (
    <div>
      <GuestBookEntryForm createEntry={createEntry} />
      {entries?.map((entry) => (
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
