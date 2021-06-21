import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

const FieldsSelect = ({ selectOptions, onChange, value }) => {
  return (
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
  );
};

export default FieldsSelect;
