import VideoModal from "./VideoModal";

// passing in video = "video_url"  and  description = "video_description"
export default function VideoCard(props){
    console.log("props!#!")
    return (
        <div className='flex-1 m-2 '>
            <div></div>
            <div className="flex-1 bg-gray-800 hover:shadow-2xl ">
                
                <div className="">
                    {
                    props.video ? 
                        <VideoModal video={props.video}/>
                    :
                        <h1>No Video</h1>
                    }
                </div>
                <div className="p-2 text-white">
                    <h4 className=" text mt-2  w-full ">
                            {props.description}
                    </h4>
                </div>
            </div>
        </div>
    );

}