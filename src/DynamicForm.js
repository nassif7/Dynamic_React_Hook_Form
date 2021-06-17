import React from "react";
import { Divider, Button } from "@material-ui/core";
// import FieldsSelect from "./FieldsSelect";
import Form from "./Form";
// import Field from "./Field";
import FormFields from "./FormFields";

const DynamicForm = () => {
  // const [fields, setFields] = React.useState([]);
  return (
    <>
      <Form>
        <FormFields />
        {/* {fields.map((field) => (
          <Field name={field} defaultValue={field} key={field} />
        ))} */}
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
