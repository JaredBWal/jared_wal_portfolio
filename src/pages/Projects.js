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
        // setSelectedTags(tags)
        // TODO get all projects that should shown
        const tempShownProject = getShownProjects(tags)
        console.log(tempShownProject)
        if (tempShownProject.length == 0){
            console.log("Empty Shown");
            setShownProjects()
        }else{
            setShownProjects(tempShownProject)
        }
         // todo
    }

    return(
        <div className="">

            <TagDropdown getSelectedTags={getSelectedTags}/>
            
            {shownProjects ?
            (<>
                <div class="flex flex-wrap justify-center bg-blue-400">
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
                    <div class="flex flex-wrap justify-center bg-green-400">
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