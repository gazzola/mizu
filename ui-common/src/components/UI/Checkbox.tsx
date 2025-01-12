import React from "react";

export interface Props {
    checked: boolean;
    onToggle: (checked:boolean) => any;
    disabled?: boolean;
}

const Checkbox: React.FC<Props> = ({checked, onToggle, disabled}) => {

    return (
        <div>
            <input style={!disabled ? {cursor: "pointer"}: {}} type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onToggle(event.target.checked)}/>
        </div>
    );
};

export default Checkbox;
