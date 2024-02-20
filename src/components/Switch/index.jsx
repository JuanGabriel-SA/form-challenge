import { useEffect, useState } from 'react';
import './Switch.scss'
import { motion, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux';
const Switch = ({ onToggle }) => {

  const [ballRef, animateBall] = useAnimate();
  const [toggle, setToggle] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const formProps = useSelector(state => state.formState);
  
  useEffect(() => {
    if (!formProps.monthly)
      switchOn()
    else
      switchOff
  }, [])

  function switchOn() {

    setIsAnimating(true);
    onToggle !== undefined && onToggle();
    animateBall(ballRef.current, {
      x: [0, 15],
    }, {
      onComplete: e => setIsAnimating(false)
    });
    setToggle(true);
  }

  function switchOff() {
    setIsAnimating(true);
    onToggle !== undefined && onToggle();
    animateBall(ballRef.current, {
      x: [15, 0]
    }, {
      onComplete: e => setIsAnimating(false)
    })
    setToggle(false);
  }

  return (
    <div className="switch-component" onClick={() => {
      if (!isAnimating) {
        if (!toggle)
          switchOn();
        else
          switchOff();
      }
    }}>
      <motion.div ref={ballRef} className='switch-ball'></motion.div>
    </div>
  );
}

export default Switch;