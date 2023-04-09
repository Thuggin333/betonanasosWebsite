import { Button, Input, Textarea } from "@mui/joy";
import { Grid } from "@mui/material";
import React from "react";

function Form() {
  return (
    <form action="">
      <Grid container>
        <Input
          required
          color="warning"
          placeholder="Your name *"
          size="sm"
          fullWidth={"100%"}
        />
        <Input
          required
          color="warning"
          placeholder="Your name *"
          size="sm"
          fullWidth={"100%"}
        />
        <Textarea
          color="warning"
          minRows={2}
          placeholder="Message"
          fullWidth={"100px"}
        />
        <Button type="submit" color="warning" fullWidth={"100%"}>
          SEND
        </Button>
      </Grid>
    </form>
  );
}

export default Form;
