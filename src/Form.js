import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, defaultValues }) => {
  const methods = useForm({ mode: "onChange", defaultValues });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
