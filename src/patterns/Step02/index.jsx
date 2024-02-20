import { useEffect, useState } from "react";
import FormDescription from "../../components/FormDescription";
import FormTitle from "../../components/FormTitle";
import Switch from "../../components/Switch";
import './Step02.scss'
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setFormProps } from "../../redux/slices/formSlice";

const Step02 = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const formState = useSelector(state => state.formState)
    const [planId, setPlanId] = useState(formState.plan);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFormProps({
            ...formState,
            monthly: isMonthly
        }))
    }, [isMonthly]);

    useEffect(() => {
        dispatch(setFormProps({
            ...formState,
            plan: planId
        }));
    }, [planId]);

    useEffect(() => {
        console.log(formState.plan)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="form-content form-content-02">
            <FormTitle>Select your plan</FormTitle>
            <FormDescription>You have the option of monthly or yearly billing.</FormDescription>
            <div className="plan-section">
                <div className="plan-content" id={planId === 0 ? 'plan-active' : undefined} onClick={e => setPlanId(0)}>
                    <img src="images/icon-arcade.svg" />
                    <div className="plan-description">
                        <h1>Arcade</h1>
                        <p>$9/mo</p>
                        <AnimatePresence>
                            {!isMonthly &&
                                <motion.p
                                    initial={{ height: 0, scaleY: 0 }} animate={{ height: 'initial', scaleY: 1 }} exit={{ height: 0, scaleY: 0 }}
                                    className="yearly-text">2 months free</motion.p>
                            }
                        </AnimatePresence>
                    </div>
                </div>
                <div className="plan-content" id={planId  === 1 ? 'plan-active' : undefined} onClick={e => setPlanId(1)}>
                    <img src="images/icon-advanced.svg" />
                    <div className="plan-description">
                        <h1>Advanced</h1>
                        <p>$12/mo</p>
                        <AnimatePresence>
                            {!isMonthly &&
                                <motion.p
                                    initial={{ height: 0, scaleY: 0 }} animate={{ height: 'initial', scaleY: 1 }} exit={{ height: 0, scaleY: 0 }}
                                    className="yearly-text">2 months free</motion.p>
                            }
                        </AnimatePresence>
                    </div>
                </div>
                <div className="plan-content" id={planId === 2 ? 'plan-active' : undefined} onClick={e => setPlanId(2)}>
                    <img src="images/icon-pro.svg" />
                    <div className="plan-description">
                        <h1>Pro</h1>
                        <p>$15/mo</p>
                        <AnimatePresence>
                            {!isMonthly &&
                                <motion.p
                                    initial={{ height: 0, scaleY: 0 }} animate={{ height: 'initial', scaleY: 1 }} exit={{ height: 0, scaleY: 0 }}
                                    className="yearly-text">2 months free</motion.p>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="plan-type-section">
                <h2 id={`${isMonthly && 'active'}`}>Monthly</h2>
                <Switch onToggle={() => setIsMonthly(!isMonthly)} />
                <h2 id={`${!isMonthly && 'active'}`}>Yearly</h2>
            </div>
        </motion.div>
    );
}

export default Step02;