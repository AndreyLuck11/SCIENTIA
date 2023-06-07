import { FieldInputProps } from "formik";
import { InputHTMLAttributes } from "react";

interface FormikDefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
	field: FieldInputProps<any>;
}

function FormikDefaultInput({ field, ...props }: FormikDefaultInputProps) {
	return <input {...field} {...props} />;
}

export default FormikDefaultInput;
