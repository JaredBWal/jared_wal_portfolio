import { useEffect, useState } from "react";
import Project from "../components/Project";
import projects_json from '../projects/project_data.json';
import TagDropdown from "../components/TagDropdown";

export default function Projects(){

    const [projects, setProjects] = useState();
    const [shownProjects, setShownProjects] = useState()

    useEffect( () => {
        
        console.log((projects_json.projects))
        setProjects(projects_json.projects)
    }, []);

    function getShownProjects(selectedTags){
        // selected tags
        var temp_shown_list = []
        projects.map( (project) => {
            var added = false
            selectedTags.map ( (tag) => {
                console.log(project)
                console.log(tag)
                console.log("===")
                
                if (project.tags.includes(tag.cat) && !added){
                    temp_shown_list.push(project)
                    added = true
                }
            })
        })
        return temp_shown_list;
    }

    // updates shownProjects when the the dropdown is changed
    function getSelectedTags(tags){
        console.log(tags)
        const tempShownProject = getShownProjects(tags)
        console.log(tempShownProject)
        if (tempShownProject.length == 0){
            console.log("Empty Shown");
            setShownProjects()
        }else{
            setShownProjects(tempShownProject)
        }
    }

    return(
        <div className="">

            <div className="mt-5 mx-10">
                <TagDropdown getSelectedTags={getSelectedTags}/>
            </div>

            {shownProjects ?
            (<>

                <div class="flex flex-wrap justify-center">

                { 
                    shownProjects.map( (project) => {                
                        return(<Project key={project.title} project={project}/>)
                    })
                }
                </div>
            </>)
            :
            projects ? 
                // console.log("Showing projects")
                (<>

                    <div class="flex flex-wrap justify-center">

                    {
                        projects.map( (project) => { 
                            return(<Project key={project.title} project={project}/>)
                        })
                    }
                    </div>
                </>)
                :
                <h1>No Projects</h1>
            }
        </div>    
    );
}