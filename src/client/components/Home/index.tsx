import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { GuestBookEntryForm } from "../GuestBookEntryForm";
import { useStoreState } from "../../hooks/index";

export const Home: React.FC = () => {
  const entries = useStoreState((state) => state.guestbook.entries);

  return (
    <div>
      <GuestBookEntryForm />
      {entries.map((entry) => (
        <Card key={entry.content}>
          <CardContent>
            <Typography variant="h2">{entry.name}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
            <Typography variant="caption">
              {entry.submitted.toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
