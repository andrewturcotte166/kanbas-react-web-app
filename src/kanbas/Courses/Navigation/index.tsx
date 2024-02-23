import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "./../../style.css";
import "./../../../libs/bootstrap/bootstrap.min.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Discussions",
        "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
        <ul className="wd-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}
export default CourseNavigation;