import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";

const Field = ({ name, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          variant="outlined"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
          label={name}
        />
      )}
      defaultValue={defaultValue}
      shouldUnregister={true}
    />
  );
};

export default Field;
