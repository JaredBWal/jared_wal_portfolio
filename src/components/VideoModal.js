import { useState } from "react";



export default function VideoModal(props){

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return(
        <>
        <div className="video-container relative w-full h-full">
            <video className=" brightness-[.6] object-contain w-full h-full" onClick={toggleModal}>
                <source src={props.video} type="video/mp4" />
            </video>
            <img src = "/images/play-button.svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-[50%] cursor-pointer opacity-75" onClick={toggleModal} alt="play-button"/>
        </div>
       
        {modal &&( 	
            <>
            <div onClick={toggleModal} className="overlay z-10 fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70"></div>
            <div className="fixed z-20 inset-0 flex items-center justify-center" onClick={toggleModal}>
                <div className="relative max-w-screen-lg w-full h-auto">
                    <video className="w-full h-auto" controls autoPlay={true}>
                        <source src={props.video} type="video/mp4" />
                    </video>
                    <div className="relative bottom-0 left-0 right-0 p-4 text-center">
                        <button
                            className="font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300 ease-in-out"
                            onClick={toggleModal}>
                            Close Video
                        </button>
                    </div>
                </div>
            </div>
            </>

        )}
        </>
     
    );
}

