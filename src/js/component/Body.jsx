import React from "react";
import Card from "./Card"
function BodyContent() {

    return (
        // dentro de este div ira el codigo del body
        <div className="col-8 m-auto" >
            <div className="row bg-light mb-3">
                <div className="jumbotron bg-body-secondary pb-5 px-4 ">
                    <h1 className="display-4">A Warn Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore? Similique dignissimos, possimus consectetur impedit iure quod eos voluptates cupiditate fugit? Esse, id vero! Error natus illum maiores ullam mollitia!</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-1 ">
                    <Card text=" Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>

                <div className="col-3 p-1 ">
                    <Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate." />
                </div>
                <div className="col-3 p-1 ">
                    <Card text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                </div>
                <div className="col-3 p-1 ">
                    <Card text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero placeat, dolore eius ab error" />
                </div>
            </div>
        </div>
    )
}

export default BodyContent