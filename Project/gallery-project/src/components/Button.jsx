import PropTypes from 'prop-types';

// กำหนด Button component
const Button = ({ className, children, ...rest }) => {
    return (
        <button {...rest} className={className}>
            {children}
        </button>
    );
};

// // กำหนด PropTypes สำหรับ Button component
Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Button;
