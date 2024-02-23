import "./../Home/index.css";
import { todos, calendar } from "../../Database";
import { useParams } from "react-router";

function Status() {
    const { courseId } = useParams();
    const todoList = todos.filter((todo) => todo.course === courseId);
    const calendarList = calendar.filter((cal_item) => cal_item.course === courseId);
    const buttons = [
        { label: "Import Existing Content", icon: <i className="fa fa-upload"></i> },
        { label: "Import From Commons", icon: <i className="fa fa-upload"></i> },
        { label: "Choose Home Page", icon: <i className="fa fa-home"></i> },
        { label: "View Course Stream", icon: <i className="fa fa-bar-chart"></i> },
        { label: "New Announcement", icon: <i className="fa fa-bullhorn"></i> },
        { label: "New Analytics", icon: <i className="fa fa-bar-chart"></i> },
        { label: "View Course Notifications", icon: <i className="fa fa-bell-o"></i> }
    ]
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block ms-2" style={{ width: 250 }}>
            <h3>Course Status</h3>
            <button><i className="fa fa-ban"></i>Unpublish</button>
            <button className="wd-publish-button"><i className="fa fa-check-circle"></i>Published</button><br />

            <div className="mt-2">
                {buttons.map((link, index) => (
                    <button key={index} className="mt-1">{link.icon}{link.label}
                    </button>
                ))}
            </div>

            <div className="d-flex mt-2">
                <h4>To do</h4>
            </div>
            <hr className="m-0" />

            <div>
                {todoList.map((todo) => (
                    <div className="wd-agenda d-flex">
                        <div>
                            <i className="fa fa-info-circle mt-1"></i>
                        </div>
                        <div className="ms-1">
                            <a href="#"> {todo.title}</a>
                            <p>{todo.points ? todo.points : "100"} Points - {todo.due ? todo.due : "Jan 1 at 00:00am"}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex mt-2">
                <h4>Coming Up</h4>
                <a href="#" className="wd-view-calendar"> <i className="fa fa-calendar"></i> View Calendar </a>
            </div>
            <hr className="m-0" />

            <div>
                {calendarList.map((agenda) => (
                    <div className="wd-agenda d-flex">
                        <div>
                            <i className="fa fa-calendar mt-1"></i>
                        </div>
                        <div className="ms-1">
                            <a href="#"> {agenda.title}</a>
                            <p>{agenda.course}</p>
                            <p>{agenda.due ? agenda.due : "Jan 1 at 00:00am"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Status;