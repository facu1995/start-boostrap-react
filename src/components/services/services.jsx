import React from "react";
import { useSelector } from "react-redux";

export default function Services() {
    const services = useSelector(state => state.services);
    return (
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">{services.h2}</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">


                    {services.service.map((el, idx) => {
                        return (
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                    <h3 className="h4 mb-2">{el.h3}</h3>
                                    <p className="text-muted mb-0">{el.p}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

<section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">At Your Service</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">

            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                    <h3 class="h4 mb-2">Sturdy Themes</h3>
                    <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
            </div>


        </div>
    </div>
</section>

