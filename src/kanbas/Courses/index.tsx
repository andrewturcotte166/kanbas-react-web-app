import "./index.css";
import { Link, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./../../libs/font-awesome/css/font-awesome.min.css"
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import ModuleNavBar from "./Home/NavBar";
const API_BASE = process.env.REACT_APP_API_BASE;
function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    const courseTitle = course.name ? course.name : "Course";
    return (
        <div>
            <h2>
                <div className="d-none d-md-flex ms-2">
                    <i className="wd-breadcrumb fa fa-bars me-2 mt-1"></i>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className="wd-breadcrumb" to={`/Kanbas/Courses/${courseId}`}>{courseTitle}</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{pathname.split("/").at(-1)}</li>
                        </ol>
                    </nav>
                </div>
                <hr className="d-none d-md-flex ms-2" />
            </h2>
            <ModuleNavBar />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
            </div>

        </div>
    );
}
export default Courses;