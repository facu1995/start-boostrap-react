import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "./form_validation/schema_validation/reel_schema";
//error
import errorHandle from "./form_validation/error_validation/reel_errors";

let initialValue = { email: "", name: "", age: 0, role: "" };

export default function Reel() {

    const fnValidationForm = (v) => alert(JSON.stringify(v));

    return (
        <div>
            <h3>::Reel</h3>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form>
                            <section>
                                <Field name="email" placeholder="email" />
                                {errorHandle(errors).email()}
                            </section>
                            <section>
                                <Field name="name" placeholder="name" />
                                {errorHandle(errors).name()}
                            </section>
                            <section>
                                <Field name="age" placeholder="age" />
                                {errorHandle(errors).age()}
                            </section>
                            <section>
                                <Field name="role" placeholder="role" />
                                {errorHandle(errors).role()}
                            </section>
                            <section>
                                <button type="submit">enviar</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}