import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import projects_json from '../projects/project_data.json';


export default function ProjectDetails(){

    const params = useParams();

    const [pageProject, setPageProject] = useState();
    useEffect(() => {
  
        projects_json.projects.map( (proj) => {
            console.log(proj)
            if (proj.title === params.title){
                setPageProject(proj);
            }
        })
        
    },[]);
   

    return (
        <>
        { pageProject ?

            <h1>{pageProject.title}</h1>
            :
            <h1>Not loaded</h1>
        }

        </>
        )
}