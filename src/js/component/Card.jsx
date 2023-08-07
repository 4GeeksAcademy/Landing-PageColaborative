import React from "react";

function Card({ text }) {
    const styleCardImg = {
        height: "200px",
        fontSize: "25px",
        width: "100%",
        background: "#DCDCDC",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
    const syleCardBody = {
        minHeight: "175px",
    }
    console.log(text)
    return (
        // dentro de este div ira el codigo del Footer
        <div className="card" >
            <div className="" style={styleCardImg}  >
                <p>500x325</p>
            </div>
            <div className="card-body" style={syleCardBody}>
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-tex text-center">{text}</p>
            </div>
            <div class="card-footer d-flex justify-content-center p-3">
                <a href="#" className="btn btn-primary">Find Out More</a>
            </div>

        </div >
    )
}

export default Card