import React from "react";
import { useForm, useWatch } from "react-hook-form";
import FieldsSelector from "./FieldsSelect";
import Field from "./Field";

const FormFields = ({ fields }) => {
  return (
    <>
      {fields.map((field) => {
        return (
          <Field
            name={field.name}
            defaultValue={field.value}
            key={field.name}
          />
        );
      })}
    </>
  );
};

export default FormFields;
