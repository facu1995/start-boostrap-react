import React  from "react";
import {  Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Download() {
    const download = useSelector(state => state.download);
    return (
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">{download.h2}</h2>
                <Link class="btn btn-light btn-xl" to="https://startbootstrap.com/theme/creative/">{download.a}</Link>
            </div>
        </section>
    )
}


