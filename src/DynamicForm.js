import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const selectOptions = [
  { name: "name", value: "" },
  { name: "lastName", value: "Doe" },
  { name: "age", value: "" },
  { name: "city", value: "" }
];

const DynamicForm = () => {
  const [fields, setFields] = React.useState([]);
  return (
    <Select
      labelId="demo-mutiple"
      id="demo-mutiple"
      multiple
      value={fields}
      onChange={(value) => setFields(value)}
    >
      {selectOptions.map((field) => (
        <MenuItem key={field.name} value={field.name}>
          {field.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DynamicForm;
