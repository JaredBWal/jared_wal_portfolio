import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import projects_json from '../projects/project_data.json';
import VideoModal from "../components/VideoModal";
import VideoCard from "../components/VideoCard";


export default function ProjectDetails(){

    const params = useParams();

    const [pageProject, setPageProject] = useState();

    const [videos, setVideos] = useState();
    useEffect(() => {
  
        projects_json.projects.map( (proj) => {
            // console.log(proj)
            if (proj.title === params.title){
                setPageProject(proj);
                setVideos(proj.videos)
            }
        })
        
    },[]);
   

    return (
        <>
        { pageProject ?
            <>
            <h1>{pageProject.title}</h1>
            {videos ?
                <>

                {/* <VideoCard video={videos[0][0]} description={videos[0][1]}/> */}
                <div className="flex flex-wrap justify-center">
                    {console.log(videos[0])}

                    {pageProject.videos.map( (video) => {
                       {console.log(video)}
                     
                        return(

                            <VideoCard video={video[0]} description={video[1]}/>
                            
                        )
                        
                    })
                    }


                </div>
                

        
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