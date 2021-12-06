import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Portfolio() {
    const portfolio = useSelector(state => state.portfolio);
    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {portfolio.map((el, idx) => {
                        return (
                            <div className="col-lg-4 col-sm-6">
                                <Link className="portfolio-box" to="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                                    <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">{el.category}</div>
                                        <div className="project-name">{el.name}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


