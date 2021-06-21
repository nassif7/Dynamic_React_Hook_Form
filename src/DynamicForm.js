import React from "react";
import { Divider, Button } from "@material-ui/core";
import FieldsSelect from "./FieldsSelect";
import Form from "./Form";
// import Field from "./Field";
import FormFields from "./FormFields";

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
        onChange={(value) => setFields(value)}
        value={fields}
      />
      <Form>
        <FormFields
          fields={fields.map((field) =>
            selectOptions.find((f) => f.name === field)
          )}
        />
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
