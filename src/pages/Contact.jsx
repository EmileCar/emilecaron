import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

const Contact = () => {
    return (
        <DefaultLayout>
            <div className="section-general">
                <h2 className="section-title">Contact</h2>
                <div className="section-title__border"></div>
                <div className="section__content">
                    <p><strong>Email: </strong>caron.emile@telenet.be</p>
                    <p><strong>Phone: </strong>+32 495 66 76 93</p>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Contact;