import { useDispatch, useSelector } from 'react-redux';
import FormDescription from '../../components/FormDescription';
import FormTitle from '../../components/FormTitle';
import './Step03.scss'
import { motion } from 'framer-motion';
import { setFormProps } from '../../redux/slices/formSlice';
import { useEffect } from 'react';

const Step03 = () => {
    const formProps = useSelector(state => state.formState);
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="form-content form-content-03">
            <FormTitle>Pick add-ons</FormTitle>
            <FormDescription>Add-ons help enhance your gaming experience.</FormDescription>
            <div
                id={formProps.adds.online_service ? 'add-active' : undefined}
                className='add-section'
                onClick={() => {
                    dispatch(setFormProps({
                        ...formProps,
                        adds: {
                            ...formProps.adds,
                            online_service: !formProps.adds.online_service
                        }
                    }))
                }}>
                <input
                    type='checkbox'
                    onChange={() => {
                        dispatch(setFormProps({
                            ...formProps,
                            adds: {
                                ...formProps.adds,
                                online_service: !formProps.adds.online_service
                            }
                        }))
                    }}
                    checked={formProps.adds.online_service} />
                <div className='add-description'>
                    <h1>Online service</h1>
                    <p>Access to multiplayer games</p>
                </div>
                <p>
                    {formProps.monthly ? '+$1/mo' : '+$10/yr'}
                </p>
            </div>
            <div
                id={formProps.adds.larger_storage ? 'add-active' : undefined}
                className='add-section'
                onClick={() => {
                    dispatch(setFormProps({
                        ...formProps,
                        adds: {
                            ...formProps.adds,
                            larger_storage: !formProps.adds.larger_storage
                        }
                    }))
                }}>
                <input
                    type='checkbox'
                    onChange={() => {
                        dispatch(setFormProps({
                            ...formProps,
                            adds: {
                                ...formProps.adds,
                                larger_storage: !formProps.adds.larger_storage
                            }
                        }))
                    }}
                    checked={formProps.adds.larger_storage} />
                <div className='add-description'>
                    <h1>Larger storage</h1>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <p>
                    {formProps.monthly ? '+$2/mo' : '+$20/yr'}
                </p>
            </div>
            <div
                id={formProps.adds.customizable_profile ? 'add-active' : undefined}
                className='add-section'
                onClick={() => {
                    dispatch(setFormProps({
                        ...formProps,
                        adds: {
                            ...formProps.adds,
                            customizable_profile: !formProps.adds.customizable_profile
                        }
                    }))
                }}>
                <input
                    type='checkbox'
                    onChange={() => {
                        dispatch(setFormProps({
                            ...formProps,
                            adds: {
                                ...formProps.adds,
                                customizable_profile: !formProps.adds.customizable_profile
                            }
                        }))
                    }}
                    checked={formProps.adds.customizable_profile} />
                <div className='add-description'>
                    <h1>Customizable Profile</h1>
                    <p>Custom theme on your profile</p>
                </div>
                <p>
                    {formProps.monthly ? '+$2/mo' : '+$20/yr'}
                </p>
            </div>
        </motion.div>
    );
}

export default Step03;