import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import projects_json from '../projects/project_data.json';


export default function ProjectDetails(){

    const params = useParams();

    const [pageProject, setPageProject] = useState();

    const [video, setVideo] = useState();
    useEffect(() => {
  
        projects_json.projects.map( (proj) => {
            console.log(proj)
            if (proj.title === params.title){
                setPageProject(proj);
                setVideo(proj.video)
            }
        })
        
    },[]);
   

    return (
        <>
        { pageProject ?
            <>
            <h1>{pageProject.title}</h1>
            {video ?
                <>
                {console.log(video)}
                <video  loop autoPlay>
                    <source src= { pageProject.video } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                </>
             :
                <h1>No Video</h1>
            }

        
            </>
            :
            <h1>Not loaded</h1>
        }

        </>
        )
}