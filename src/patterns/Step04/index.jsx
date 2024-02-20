import { useDispatch, useSelector } from 'react-redux';
import FormDescription from '../../components/FormDescription';
import FormTitle from '../../components/FormTitle';
import './Step04.scss';
import { motion } from 'framer-motion';
import { setStep } from '../../redux/slices/stepSlice';

const Step04 = () => {
    const formProps = useSelector(state => state.formState);
    const dispatch = useDispatch();
    function createResume() {

    }

    function getPlan() {
        switch (formProps.plan) {
            case 0:
                return 'Arcade';
            case 1:
                return 'Advanced';
            case 2:
                return 'Pro';
            default:
                return ''
        }
    }

    function getPlanPrice() {
        let price = 0;
        switch (formProps.plan) {
            case 0:
                price = 9;
                break;
            case 1:
                price = 12;
                break;
            case 2:
                price = 15;
                break;
            default:
                price = 0
                break;
        }

        if (!formProps.monthly)
            return `$${price * 10}/yr`;
        else
            return `$${price}/mo`;
    }

    function createAddsResume() {
        let fields = [];

        if (formProps.adds.online_service) {
            fields.push(
                <div className='add-section-resume'>
                    <h3>Online service</h3>
                    <h2>+${formProps.monthly ? '1/mo' : '10/yr'}</h2>
                </div>
            )
        }

        if (formProps.adds.larger_storage) {
            fields.push(
                <div className='add-section-resume'>
                    <h3>Larger storage</h3>
                    <h2>+${formProps.monthly ? '2/mo' : '20/yr'}</h2>
                </div>
            )
        }

        if (formProps.adds.customizable_profile) {
            fields.push(
                <div className='add-section-resume'>
                    <h3>Customizable profile</h3>
                    <h2>+${formProps.monthly ? '2/mo' : '20/yr'}</h2>
                </div>
            )
        }

        return fields;
    }

    function getTotalPrice() {
        var totalPrice = 0;

        switch (formProps.plan) {
            case 0:
                totalPrice = 9;
                break;
            case 1:
                totalPrice = 12;
                break;
            case 2:
                totalPrice = 15;
                break;
            default:
                totalPrice = 0
                break;
        }

        if (!formProps.monthly) {

            totalPrice *= 10;

            if (formProps.adds.online_service)
                totalPrice += 10

            if (formProps.adds.larger_storage)
                totalPrice += 20
            if (formProps.adds.customizable_profile)
                totalPrice += 20

        } else {
            if (formProps.adds.online_service)
                totalPrice += 1

            if (formProps.adds.larger_storage)
                totalPrice += 2
            if (formProps.adds.customizable_profile)
                totalPrice += 2
        }


        return <h2>+${totalPrice}/{formProps.monthly ? 'mo' : 'yr'}</h2>;

    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="form-content form-content-04">
            <FormTitle>Finishing up</FormTitle>
            <FormDescription>
                Double-check everything looks OK before confirming.
            </FormDescription>

            <div className='form-resume-body'>
                <div className='plan-resume'>
                    <div className="plan-description">
                        <h1>{getPlan()} ({formProps.monthly ? 'Monthly' : 'Yearly'})</h1>
                        <p onClick={() => dispatch(setStep(2))}>Change</p>
                    </div>
                    <p>{getPlanPrice()}</p>
                </div>

                {createAddsResume()}
            </div>
            <div className='total-section'>
                <h3>Total (per {formProps.monthly ? 'month' : 'year'})</h3>
                {getTotalPrice()}
            </div>
        </motion.div>
    );
}

export default Step04;