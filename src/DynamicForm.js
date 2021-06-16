import React from "react";
import { Divider, Button } from "@material-ui/core";
import FieldsSelect from "./FieldsSelect";
import Form from "./Form";
import Field from "./Field";

const selectOptions = [
  { name: "name", value: "" },
  { name: "lastName", value: "Doe" },
  { name: "age", value: "" },
  { name: "city", value: "" }
];

const DynamicForm = () => {
  const [fields, setFields] = React.useState([]);
  return (
    <>
      <FieldsSelect
        selectOptions={selectOptions}
        onChange={(v) => setFields(v)}
        value={fields}
      />
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Form>
        {fields.map((field) => (
          <Field name={field} defaultValue={field} key={field} />
        ))}
        <Button
          style={{ marginTop: "2rem" }}
          type="submit"
          variant="outlined"
          fullWidth
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default DynamicForm;
