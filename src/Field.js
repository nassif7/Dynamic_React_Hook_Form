import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

const Field = ({ name, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField value={value} onChange={(e) => onChange(e.target.value)} />
      )}
      defaultValue={defaultValue}
    />
  );
};

export default Field;
