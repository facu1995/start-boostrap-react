import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
    const home = useSelector(state => state.home);
    return (
        <section>
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold">{home.h1}</h1>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">{home.p}</p>
                            <Link className="btn btn-primary btn-xl" to="#about">{home.a}</Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}
