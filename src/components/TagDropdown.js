import Multiselect from 'multiselect-react-dropdown';
import { useState, useEffect } from 'react';
import json_tags from "../projects/project_data.json"




// props -> 'projects' = a list of all the project data
export default function TagDropdown(props){

    

    const [selectedValue, setSelectedValue] = useState()
    const [options, setOptions] = useState()

    useEffect( () => {
        // setOptions(json_tags.tags)
        var tags = []
        json_tags.tags.map( (tag) => {
            var newTag = {cat:tag, key:tag}
            tags.push(newTag)
        })
        // console.log(tags)
        setOptions(tags)
    }, []);

    function handleSelect(selectedList, removedItem){
        props.getSelectedTags(selectedList)
    }

    return(

        <>
            
        { options ? 
                (<>
                   <Multiselect
                    displayValue="key"
                    onKeyPressFn={function noRefCheck(){}}
                    onRemove={handleSelect}
                    onSearch={function noRefCheck(){}}
                    onSelect={handleSelect}
                    options={options} 
                    showCheckbox
                    />
                </>)

                :
                <h1>dadwe</h1>

            }
        </>

        );
    }
    
