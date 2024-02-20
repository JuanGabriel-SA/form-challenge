import { useDispatch, useSelector } from 'react-redux';
import FormDescription from '../../components/FormDescription';
import FormInput from '../../components/FormInput';
import FormTitle from '../../components/FormTitle';
import './Step01.scss';
import { motion } from 'framer-motion';
import { setFormProps } from '../../redux/slices/formSlice';

const Step01 = () => {
  const dispatch = useDispatch();
  const formProps = useSelector(state => state.formState);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="form-content form-content-01">
      <FormTitle>Personal info</FormTitle>
      <FormDescription>Please provide your name, email address, and phone number.</FormDescription>
      <FormInput
        id="input-name"
        label="Name"
        placeholder="e.g. Stephen King"
        value={formProps.name}
        onChange={e => dispatch(setFormProps({ ...formProps, name: e.target.value }))} />
      <FormInput
        id="input-email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        value={formProps.email}
        onChange={e => dispatch(setFormProps({ ...formProps, email: e.target.value }))} />
      <FormInput
        id="input-phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={formProps.phone}
        onChange={e => dispatch(setFormProps({ ...formProps, phone: e.target.value }))} />
    </motion.div>
  );
}

export default Step01;