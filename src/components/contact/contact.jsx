import React from "react";
import { useSelector } from "react-redux";
//formulio
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "./form_validation/schema_validation/contact_schema";
//error
import errorHandle from "./form_validation/error_validation/contact_errors";

export default function Contact() {
    const contact = useSelector(state => state.contact);

    let initialValue = { email: "", name: "", phone: 0, msj: "" };

    const fnValidationForm = (v) => alert(JSON.stringify(v));

    return (
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">{contact.h2}</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">{contact.p}</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        <Formik
                            initialValues={initialValue}
                            validationSchema={Schema}
                            onSubmit={fnValidationForm}>
                            {({ errors }) => {
                                return (
                                    <Form>
                                        <div class="form-floating mb-3">
                                            <Field name="name" class="form-control" id="name" type="text" placeholder="{contact.input[0]}" data-sb-can-submit="no" />
                                            <label for="name">{contact.input[0].label}</label>
                                            {errorHandle(errors).name()}
                                        </div>
                                        <div class="form-floating mb-3">
                                            <Field name="email" class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no" />
                                            <label for="email">{contact.input[1].label}</label>
                                            {errorHandle(errors).email()}
                                        </div>
                                        <div class="form-floating mb-3">
                                            <Field name="phone" class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no" />
                                            <label for="phone">{contact.input[2].label}</label>
                                            {errorHandle(errors).phone()}
                                        </div>
                                        <div class="form-floating mb-3">
                                            <Field name="msj" class="form-control" as="textarea"  id="message" placeholder="Enter your message here..."  data-sb-validations="required" data-sb-can-submit="no"/>
                                            <label for="message">Message</label>
                                        {errorHandle(errors).msj()}
                                        </div>

                                        <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button></div>
                                    </Form>)
                            }}
                        </Formik>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>{contact.phono}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/*
<section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">{contact.h2}</h2>
                        <hr class="divider"/>
                        <p class="text-muted mb-5">{contact.p}</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">

                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                            <div class="form-floating mb-3">
                            <Field name="name" class="form-control" id="name" type="text" placeholder="{contact.input[0]}" data-sb-can-submit="no"/>
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>

                            <div class="form-floating mb-3">
                            <Field name="email" class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no"/>
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>

                            <div class="form-floating mb-3">
                            <Field name="phone" class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no"/>
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                            <Field name="msj" class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required" data-sb-can-submit="no">
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>

                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br/>
                                    <Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link>
                                </div>
                            </div>

                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>

                            <div class="d-grid"><button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>{contact.phone}</div>
                    </div>
                </div>
            </div>
        </section> */