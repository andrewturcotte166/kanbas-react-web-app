import React from "react";
import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2> <hr />
            <div>
                <label>Course Name:<input value={course.name} className="form-control" style={{ maxWidth: "250px" }}
                    placeholder="Course Name" onChange={(e) => setCourse({ ...course, name: e.target.value })} /></label>
                <label>Course Number:<input value={course.number} className="form-control" style={{ maxWidth: "250px" }}
                    placeholder="Course Number" onChange={(e) => setCourse({ ...course, number: e.target.value })} /></label><br/>
                <label>Course Description:<textarea value={course.description} className="form-control" style={{ maxWidth: "250px" }}
                    placeholder="Course Description" onChange={(e) => setCourse({ ...course, description: e.target.value })} /></label><br/>
                <label>Start Date:<input value={course.startDate} className="form-control" type="date" style={{ maxWidth: "250px" }}
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /></label>
                <label>End Date:<input value={course.endDate} className="form-control" type="date" style={{ maxWidth: "250px" }}
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /></label>
                <div>
                    <button className="btn btn-success mt-1" onClick={addNewCourse} >
                        Add
                    </button>
                    <button className="btn btn-dark ms-1 mt-1" onClick={updateCourse} >
                        Update
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 280 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} alt="" />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}
                                    </Link>
                                    <p className="card-text">{course.description}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                                    <button className="btn btn-secondary ms-1" onClick={(event) => { event.preventDefault(); setCourse(course); }}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger ms-1" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;