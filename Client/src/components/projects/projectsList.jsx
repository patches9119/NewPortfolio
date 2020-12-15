import React from "react";
import Project from "./project";
import { data } from "../../data";

const ProjectList = () => {
    return data.map(app => {
        return (
            <Project {...app} key={app.name} />
        );
    });
};

export default ProjectList;