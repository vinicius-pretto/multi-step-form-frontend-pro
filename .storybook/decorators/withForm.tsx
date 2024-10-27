import React, { SyntheticEvent } from "react";
import { Button } from "../../src/components/core/Button";

export const withForm = () => {
  return (Story: React.FunctionComponent) => {
    const onSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
    }

    return (
      <form noValidate onSubmit={onSubmit}>
        <Story />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}