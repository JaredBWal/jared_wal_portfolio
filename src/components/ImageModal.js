import { useState } from "react";


// Props takes in img = "img_url"
export default function ImageModal(props){

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return(
        <>
        <div className="video-container relative w-full h-full">
            <img src={props.img } className="grayscale brightness-50 object-contain w-full h-full" onClick={toggleModal}> </img>
            <img src = "/images/play-button.svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-24 cursor-pointer " onClick={toggleModal} alt="play-button"/>
        </div>
       
        {modal &&( 	
            <>
            <div onClick={toggleModal} className="overlay z-10 fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70"></div>
            <div className="the_modal fixed w-[50em] h-[30em] z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute bg-slate-200 bg-opacity-70 flex flex-col">
                    <div className="flex-grow">
                        <image className="" controls="controls" autoPlay="{true}">
                            {console.log(props.img)}    
                            <source src={props.img} />
                        </image>
                    </div>
                    <div className="flex justify-center justify-end m-3">
                        <button className=" font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300 ease-in-out" onClick={toggleModal}> Close Video</button>
                    </div>
                </div>
            </div>
            </>

        )}
        </>
     
    );
}

