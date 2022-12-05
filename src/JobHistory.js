import Spacer from "./Spacer";

const JobHistory = () =>{
    return(
        <section className="jobs-section jobs" id="experience">
            <Spacer />
            <div className="container">
                <h2 className="numbered-heading secondaryHeading">Where I've Worked</h2>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="list-group" id="list-tab" role="tablist">
                        <a className=" active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">CoStar Group</a>
                        <a className="" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Stone Crest Property</a>
                        <a className="" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">A-Check Global</a>                    
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="tab-content job-duties" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <h5>Sofware Engineer <span className="company">@ CoStar Group</span></h5>
                                <p>January 2022 - Present</p>
                                <div>
                                    <ul>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <h5>Data Analyst Engineer <span className="company">@ Stoncrest Property</span></h5>
                                <p>September 2020 - December 2021</p>
                                <div>
                                    <ul>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                            <h5>Business Analyst <span className="company">@ A-Check Global</span></h5>
                                <p>September 2016 - April 2020</p>
                                <div>
                                    <ul>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>
                                        <li>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </li>                                    
                                    </ul>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
            <Spacer />
        </section>
        )
}

export default JobHistory;