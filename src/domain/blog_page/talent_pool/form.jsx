import React from "react";
import { useForm } from "react-hook-form";

export function Form(Component) {
  return function WrappedComponent(props) {
    const methods = useForm();
    return (
        <div className="talent-pool-section"><Component {...props} methods={methods} /></div>
    )
  };
}
