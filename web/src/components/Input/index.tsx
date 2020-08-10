import React , {InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    label: string,
    id: string,
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}> {label}
                <input type="text" id={id} {...rest} />
            </label>
        </div>
    );
}

export default Input;