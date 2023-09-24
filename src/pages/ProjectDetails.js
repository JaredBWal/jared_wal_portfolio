import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import projects_json from '../projects/project_data.json';
import VideoModal from "../components/VideoModal";
import VideoCard from "../components/VideoCard";
import ImageCard from "../components/ImageCard";


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
                    {pageProject.videos.map( (video) => {
                        return(
                            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">
                                <VideoCard video={video[0]} description={video[1]}/>
                            </div>
                        )
                    })
                    }

                    {pageProject.imgs.map( (img) => {
                        return(
                            <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 rounded-md">
                                <ImageCard img={img[0]} description={img[1]}/>
                            </div>
                        )
                    })
                    }

                </div>
                </>
             :
                <h1>No Video</h1>
            }

            {/* <div class="flex flex-wrap justify-center bg-gray-200">
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <VideoCard video={videos[0][0]} description={videos[0][1]}/>
                </div>
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                <VideoCard video={videos[1][0]} description={videos[1][1]}/>
                </div>
                <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    Significantly larger amount of contentSignificantly larger amount of contentSignificantly larger amount of contentSignificantly larger amount of content
                </div>
            </div> */}

            </>
            :
            <h1>Not loaded</h1>
        }

        </>
        )
}