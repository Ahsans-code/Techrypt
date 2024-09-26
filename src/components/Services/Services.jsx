import React from 'react'
import "./Services.css"

export default function Services() {
    return (
        <>
            <div className="container-main">
                <div className="headingDiv">
                    <h1 className="servicesHeading">
                        You will get high quality service
                    </h1>
                </div>
                <div className="mainBox">
                    <div className="firstRow">
                        <div className="firstBox">
                            <p className="boxText">Performance marketing analytics</p>
                        </div>
                        <div className="secondBox">
                            <p className="boxText">Landing pages</p>
                        </div>
                        <div className="thirdBox">
                            <p className="boxText" style={{ width: "198px" }}>Usability audit and advertising campaign audit</p>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="firstBox">
                            <p className="boxText" style={{ width: "266px" }}>Creating ad campaigns for pre-installs from Samsung, Xiaomi and Huawei stores</p>
                        </div>
                        <div className="secondBox">
                            <p className="boxText" style={{ width: "266px" }}>Website promotion on social media</p>
                        </div>
                        <div className="thirdBox">
                            <p className="boxText" style={{ width: "266px" }}>Development of custom mechanics and special projects</p>
                        </div>
                    </div>
                    <div className="thirdRow">
                        <div className="firstBox">
                            <p className="boxText" style={{ width: "266px" }}>Detailed reports</p>
                        </div>
                        <div className="secondBox">
                            <p className="boxText" style={{ width: "266px" }}>Media market overview and competitors analysis</p>
                        </div>
                        <div className="thirdBox">
                            <p className="boxText" style={{ width: "266px" }}>A/B testing</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

