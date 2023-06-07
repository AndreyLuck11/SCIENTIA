'use client';
import { FieldInputProps } from "formik";
import { InputHTMLAttributes } from "react";

interface DefaultInput extends InputHTMLAttributes<HTMLInputElement> {
	field?: FieldInputProps<any>;
}

function DefaultInput({ field, ...props }: DefaultInput) {
	return <input {...field} {...props} />;
}
export default DefaultInput;
