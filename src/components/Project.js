


export default function Project(props){
    {console.log(props.project.imgs)}




    return (
        <div className='w-30 m-2 '>
        <div></div>
        <div className="group relative rounded-lg overflow-hidden bg-gray-800  hover:shadow-2xl ">
            
        <div className="object-contain h-36 w-96">
        
        {/* {console.log(tournament.)} */}
        {
                props.project.imgs ? 
                    <img       
                        // gets the img url from the first img in the list
                        src={props.project.imgs[0][0]}
                        className="object-contain object-fill h-36 w-96 object-center "
                    />
                :
                    <img
                    src=''
                    alt='osu logo'
                    className="object-contain h-36 w-96 object-center "
                    />
                }
        </div>
        <div className="h-1/2 p-2 object-contain h-36 w-96 text-white">
            <h1 className="font-bold text mt-2 h-8 truncate">
                <a href={'projects/'+props.project.title} class="hover:underline">
                {props.project.title}
                </a>
            </h1>

            <div className="">
                {props.project.tags}

            </div>

            <div className="">
                {props.project.description}

            </div>


            {/* <div className='flex flex-row justify-between text mt-2 h-[66px]'> 
                <p className=" line-clamp-4		">{props.description}</p>
            </div> */}
        </div>
    </div>

</div>
    );

}