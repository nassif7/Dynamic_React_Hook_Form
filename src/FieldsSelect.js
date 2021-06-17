import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { Controller, useFormContext, useForm } from "react-hook-form";

const FieldsSelect = ({ selectOptions, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="fields"
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="demo-mutiple">Select Fields</InputLabel>
          <Select
            label="Select Fields"
            labelId="demo-mutiple"
            id="demo-mutiple"
            multiple
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {selectOptions.map((field) => (
              <MenuItem key={field.name} value={field.name}>
                {field.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      defaultValue={defaultValue}
    />
  );
};

export default FieldsSelect;
