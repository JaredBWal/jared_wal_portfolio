import { components } from "react-select";

export default function DropdownOption(props) {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}

          placeholder="CSS Custom"
            style={{
                multiselectContainer: {
                color: 'red'
                },
                searchBox: {
                border: 'none',
                'border-bottom': '1px solid blue',
                'border-radius': '10px'
            }}}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};