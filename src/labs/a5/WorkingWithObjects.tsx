import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "1", name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "CS4450",
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const MODULE_URL = "http://localhost:4000/a5/module"
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    const updateName = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/name/${module.name}`);
        setModule(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);
    return (
        <div>
            <h3> Working With Objects </h3>
            <h4> Retrieving Objects </h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <a className="btn btn-primary ms-2" href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <a className="btn btn-primary ms-2" href="http://localhost:4000/a5/module/name">
                Get Module Name
            </a>
            <h4>Modifying Properties</h4>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />
            <label> Completed:
                <input type="checkbox"
                    onChange={(e) => setAssignment({
                        ...assignment,
                        completed: e.target.checked
                    })}
                    value={assignment.completed.toString()} />
            </label>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a> <br />
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <h3>Modifying Properties (Axios) </h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button className="btn btn-primary" onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button className="btn btn-primary" onClick={fetchAssignment} >
                Fetch Assignment
            </button>
        </div>
    );
}
export default WorkingWithObjects;