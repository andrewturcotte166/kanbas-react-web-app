import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "./../style.css";
import "./../../libs/font-awesome/css/font-awesome.min.css"
import "./../../libs/bootstrap/bootstrap.min.css";
function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Account", icon: <i className={pathname.includes("Account") ? "fa fa-user" : "account fa fa-user"}></i> },
        { label: "Dashboard", icon: <i className="fa fa-tachometer"></i> },
        { label: "Courses", icon: <i className="fa fa-book"></i> },
        { label: "Calendar", icon: <i className="fa fa-calendar"></i> },
        { label: "Inbox", icon: <i className="fa fa-inbox"></i> },
        { label: "History", icon: <i className="fa fa-clock-o"></i> },
        { label: "Studio", icon: <i className="fa fa-tv"></i> },
        { label: "Commons", icon: <i className="fa fa-arrow-circle-o-up"></i> },
        { label: "Help", icon: <i className="fa fa-question-circle"></i> },
    ];
    return (
        <ul className="wd-kanbas-navigation">
            <li><a href="http://northeastern.edu">N</a></li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon}<br /> {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;