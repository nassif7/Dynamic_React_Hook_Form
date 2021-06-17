import React from "react";
import { useForm, useWatch } from "react-hook-form";
import FieldsSelector from "./FieldsSelect";
import Field from "./Field";

const selectOptions = [
  { name: "name", value: "" },
  { name: "lastName", value: "Doe" },
  { name: "age", value: "" },
  { name: "city", value: "" }
];

const FormFields = () => {
  const fields = useWatch({ name: "fields" }) || [];

  return (
    <>
      <FieldsSelector selectOptions={selectOptions} defaultValue={[]} />
      {fields.map((field) => {
        return (
          <Field
            name={field}
            defaultValue={selectOptions.find((o) => o.name === field).value}
            key={field}
          />
        );
      })}
    </>
  );
};

export default FormFields;
