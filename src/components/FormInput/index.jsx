import { useDispatch, useSelector } from 'react-redux';
import './FormInput.scss';
import { useEffect } from 'react';
import { setError } from '../../redux/slices/errorSlice';

const FormInput = ({ label, placeholder, id, value, ...props }) => {
    const errorStep = useSelector(state => state.errorState);
    const dispatch = useDispatch();

    function verifyError() {
        if (id === "input-email")
            return (validateEmail() && value !== '' && value !== undefined)
        else
            return (value !== '' && value !== undefined)
    }

    function validateEmail() {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(value);
    }

    return (
        <div className="form-input" {...props}>
            <div className="input-labels">
                <label htmlFor={id}>
                    {label}
                </label>

                {(!verifyError() && errorStep) && (
                    <p>{(id === "input-email" && value !== '' && value !== undefined) ? 'Wrong format' : 'The field is required'}</p>
                )}

            </div>
            <input
                onFocus={() => dispatch(setError(false))}
                id={(!verifyError() && errorStep) ? 'field-error' : id}
                value={value}
                placeholder={placeholder}
                {...props} />
        </div>
    );
}

export default FormInput;