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
            <h1 className="text-4xl font-extrabold mb-2">{pageProject.title}</h1>

            { pageProject.links ?

                <>
                    {pageProject.links.map((link)=>{
                        return(
                            <a  target="_blank" rel="noopener noreferrer" className="m-2 px-4 py-1 rounded-md bg-green-400" href={link[0]}>
                                {link[1]}
                            </a>
                        )
                    })
                    }
                </>
                :
                <h1></h1>
            }

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
             <>
             <div className="flex flex-wrap justify-center">

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
            }

<div className="p-2 text-left justify-start bg-gray-400 rounded-md">
  <h2 className="font-bold">About this project:</h2>
  <p>{pageProject.description}</p>
  <ul className="mt-2 text-black-500  list-disc list-inside">
    <h2 className="font-bold">{pageProject.description_bullets_label}</h2>
    {pageProject.description_bullets.map((bullet) => (
      <li className="list-disc" style={{ marginLeft: "10px" }}>{bullet}</li>
    ))}
  </ul>
</div>


            </>
            :
            <h1>Not loaded</h1>
        }

        </>
        )
}