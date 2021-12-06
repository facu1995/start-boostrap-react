import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function About() {
    const about = useSelector(state => state.about);
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">{about.h2}</h2>
                        <hr className="divider divider-light"/>
                        <p className ="text-white-75 mb-4">{about.p}</p>
                        <Link  className ="btn btn-light btn-xl" to="#services">{about.a}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}



