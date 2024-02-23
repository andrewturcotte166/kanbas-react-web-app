import KanbasNavigation from "../../Navigation";
import CourseNavigation from "../Navigation";
import React, { useState } from "react";

function ModuleNavBar() {
    const [showCourseNav, setShowCourseNav] = useState(false);
    const [showKanbasNav, setShowKanbasNav] = useState(false);

    return (
        <>
            {showKanbasNav && (
                <div className="d-flex card card-body">
                    <i className="fa fa-caret-down fa-3x navbar-brand" style={{display: "flex", justifyContent: "end"}}role="button" onClick={() => setShowKanbasNav(!showKanbasNav)}></i>
                    <KanbasNavigation />
                </div>
            )}
            <div className="d-block d-md-none">
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <i className="fa fa-bars navbar-brand ms-3" role="button" onClick={() => setShowKanbasNav(!showKanbasNav)}></i>
                    <p className="navbar-brand justify-content-center mt-3">CS4550 Modules</p>
                    <i className="fa fa-caret-down navbar-brand" role="button" onClick={() => setShowCourseNav(!showCourseNav)}></i>
                </div>
            </div>
            {showCourseNav && (
                <div className="d-md-none">
                    <div className="card card-body">
                        <CourseNavigation />
                    </div>
                </div>
            )}
        </>

    );
}
export default ModuleNavBar;