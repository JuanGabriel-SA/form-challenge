import './FormTitle.scss';

const FormTitle = ({children, ...props}) => {
    return (
        <h1 className="form-title" {...props}>{children}</h1>
      );
}
 
export default FormTitle;