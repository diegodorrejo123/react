import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOutMenu({setAuthenticated}) {
  return (
    <MenuItem position="right">
      <Button onClick={() => setAuthenticated(true)} inverted basic content="Login" />
      <Button
        inverted
        basic
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </MenuItem>
  );
}
