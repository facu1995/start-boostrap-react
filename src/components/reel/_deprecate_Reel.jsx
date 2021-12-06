import React from 'react';
import * as Yup from "yup";  //
import { Formik, Form, Field } from "formik";  //validar formulario

let initState = { email: "", name: "", age: 0, color: "" };


export default function Reel() {

    const Schema = Yup.object().shape({
        email: Yup.string().min(5).required("email is required"),
        name: Yup.string().min(2).required("name is required"),
        age: Yup.string().min(2).required("age is required"),
        color: Yup.string().min().required("color is required")
    });

    const fnSave= v =>alert(JSON.stringify(v));

    const errorList= (errors)=>{

        return{

        }
    }
}
