import React, { SelectHTMLAttributes } from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: Array<{
        value: string,
        label: string
    }>;
}

const Select: React.FC<SelectProps> = ({ label, id, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={id}> {label}
                <select defaultValue="" id={id} {...rest}>
                    <option value="" disabled hidden >Selecione</option>
                    {options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
                </select>
            </label>
        </div>
    );
}

export default Select;