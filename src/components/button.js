
const Button = ({ label, color ,children , bgColor }) => {
    
    return (
        <button style={{ 
            color: color,
            backgroundColor: bgColor
        }}>
            {label || children}
        </button> 
    );
};

export default Button;