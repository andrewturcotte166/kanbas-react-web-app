import React, { useState } from "react";
import "./../Home/index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, } from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules).filter((module) => module.course === courseId);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    const dispatch = useDispatch();
    return (
        <div className="flex-fill" style={{ maxWidth: "750px" }}>
            <div className="wd-module-b wd-justify-end mt-2">
                <button>Collapse All</button>
                <button>View Progress</button>
                <select name="publish-list">
                    <option value="Publish All"> Publish All</option>
                </select>
                <button className="wd-module-button">+ Module</button>
            </div>
            <hr />
            <div>
                <label>Module Name: <br/><input value={module.name} placeholder="Module Name"
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                /></label> <br />
                <label>Module Description: <br/><textarea value={module.description} placeholder="Module Description"
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                /></label> <br />
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    className="btn btn-success"> Add</button>
                <button onClick={() => dispatch(updateModule(module))}
                    className="btn btn-dark ms-1"> Update </button>
            </div>

            <ul className="list-group wd-modules">
                {moduleList.map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                                <button className="btn btn-secondary ms-2"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button className="btn btn-danger ms-2"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                            </span>
                        </div>
                        {selectedModule && selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: {
                                    _id: String, name: String, description: String, module: String
                                }, index: React.Key) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ModuleList;