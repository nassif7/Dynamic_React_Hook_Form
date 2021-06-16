import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = ({ children }) => {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </div>
  );
};

export default Form;
