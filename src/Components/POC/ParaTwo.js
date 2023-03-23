import React from "react";
import IconOne from '../../Images/icon1.jpeg';
import IconTwo from '../../Images/icon2.jpeg';
import IconThree from '../../Images/icon3.jpeg';
import IconFour from '../../Images/icon4.jpeg';
import IconFive from '../../Images/icon5.jpeg';
import IconSix from '../../Images/icon6.jpeg';
import IconSeven from '../../Images/icon7.jpeg';
import IconEight from '../../Images/icon8.jpeg';
import IconNine from '../../Images/icon9.jpeg';
import IconTen from '../../Images/icon10.jpeg';
import IconEleven from '../../Images/icon11.jpeg';
import IconTwelve from '../../Images/icon12.jpeg';
import IconThirteen from '../../Images/icon13.jpeg';
import IconFourteen from '../../Images/icon14.jpeg';
import IconFifteen from '../../Images/icon15.jpeg';
import IconSixten from '../../Images/icon16.jpeg';
// import IconSeventeen from '../../Images/icon17.jpeg';
import './ParaTwo.css';

const ParaTwo = (props) => {
    return (
        <div className="container">
            <h3>{props.heading2}</h3>
            <div className="body">
                {/* Col one */}
                <div className="column">
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconOne} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">{props.Field1Label}</p>
                            <p lassName="para-text">{props.Field1Value}</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconTwo} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">{props.Field2Label}</p>
                            <p lassName="para-text">{props.Field2Value}</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconThree} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">{props.Field3Label}</p>
                            <p lassName="para-text">{props.Field3Value}</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconFour} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">{props.Field4Label}</p>
                            <p lassName="para-text">{props.Field4Value}</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>
                {/* Col Two */}
                <div className="column">
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconFive} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Food & Agriculture</p>
                            <p lassName="para-text">16%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconSix} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">GreenProducts & Services</p>
                            <p lassName="para-text">0%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconSeven} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Waste</p>
                            <p lassName="para-text">33%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconEight} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Water</p>
                            <p lassName="para-text">0%</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>
                {/* Col Three */}
                <div className="column">
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconNine} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Community (General)</p>
                            <p lassName="para-text">16%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconTen} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Community Infrastructure</p>
                            <p lassName="para-text">0%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconEleven} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Education</p>
                            <p lassName="para-text">33%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconTwelve} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Health & Wellness</p>
                            <p lassName="para-text">0%</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>
                {/* Col Four */}
                <div className="column">
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconThirteen} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Financial Inclusion</p>
                            <p lassName="para-text">16%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconFourteen} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Human & Worker Rights</p>
                            <p lassName="para-text">0%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconFifteen} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Economic Development</p>
                            <p lassName="para-text">33%</p>
                        </div>
                    </div>
                    <div>
                        <div className="horizontal-line" />
                        <div className="single-box">
                            <img src={IconSixten} className="image" alt="icon1" width={50} height={50} />
                            <p className="para-text">Diversity & Inclusion</p>
                            <p lassName="para-text">0%</p>
                        </div>
                        <div className="horizontal-line" />
                        {/* <div className="single-box">
                        <img src={IconSeventeen} className="image" alt="icon1" width={50} height={50} />
                        <p className="para-text">Health & Wellness</p>
                        <p lassName="para-text">0%</p>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParaTwo;