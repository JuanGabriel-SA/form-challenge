import './FormDescription.scss';

const FormDescription = ({children, ...props}) => {
    return (
        <p className="form-description" {...props}>{children}</p>
      );
}
 
export default FormDescription;