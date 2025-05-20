import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    classNm?:string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false ,classNm}) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={classNm}
        >
            <span className='text-[.55rem] tracking-wide'>{label}</span>
        </button>
    );
};

export default Button;