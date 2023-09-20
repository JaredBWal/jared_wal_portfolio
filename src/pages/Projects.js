import { useEffect, useState } from "react";
import Project from "../components/Project";
import projects_json from '../projects/project_data.json';

export default function Projects(){

    const [projects, setProjects] = useState();

    useEffect( () => {
        
        console.log((projects_json.projects))
        setProjects(projects_json.projects)
    }, []);


    return(
        <div className="">
  

            {projects ?
            (<>
                <div className="flex flex-wrap justify-center">
                { 
                    projects.map( (project) => {
                        console.log(project)
                    return(
                        <Project key={project.title} project={project} />
                    );
                    })
                }
                </div>
                
            
            </>)
            :
                <p>No projects loaded </p>
            }
        </div>

        
    );

}