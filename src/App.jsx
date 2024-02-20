import { useEffect, useState } from 'react';
import './App.scss'
import Button from './components/Button';
import Step01 from './patterns/Step01';
import Step02 from './patterns/Step02';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from './redux/slices/stepSlice';
import Step03 from './patterns/Step03';
import Step04 from './patterns/Step04';
import { setError } from './redux/slices/errorSlice';

function App() {
  const currentStep = useSelector(state => state.stepState);
  const dispatch = useDispatch();
  const formProps = useSelector(state => state.formState);

  function createFormBody() {
    switch (currentStep) {
      case 1:
        return <Step01 />
      case 2:
        return <Step02 />
      case 3:
        return <Step03 />
      case 4:
        return <Step04 />
    }
  }

  function verifyFields() {
    switch (currentStep) {
      case 1:
        return validateStep01();
      default:
        return true;
    }
  }

  function validateStep01() {
    if (formProps.name == undefined || formProps.name == '')
      return false;

    if (formProps.phone == undefined || formProps.phone == '')
      return false;

    if (formProps.email == undefined || formProps.email == '')
      return false;

    else
      return validateEmail();
  }

  function validateEmail() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(formProps.email);
  }

  function nextStep() {
    if (verifyFields())
      dispatch(setStep(currentStep + 1))
    else
      dispatch(setError(true));
  }

  function prevStep() {
    dispatch(setStep(currentStep - 1))
  }


  return (
    <div className='container'>
      <div className='header'>
        <ul className='navigation-buttons'>
          <li key="1" id={currentStep == 1 ? 'active' : undefined}>
            1
          </li>
          <li key="2" id={currentStep == 2 ? 'active' : undefined}>
            2
          </li>
          <li key="3" id={currentStep == 3 ? 'active' : undefined}>
            3
          </li>
          <li key="4" id={(currentStep == 4 || currentStep == 5) ? 'active' : undefined}>
            4
          </li>
        </ul>
      </div>
      <div
        className="body">
        <div className="form-section-sm">
          {currentStep < 5 ?
            <div className='form-body'>
              {createFormBody()}
            </div>
            :
            <div className='form-completed-message'>
              <img src='images/icon-thank-you.svg' />
              <h1>Thank you!</h1>
              <p>Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</p>
            </div>
          }
        </div>

        <div className='form-section-lg'>
          <div className='steps-section'>
            <ul className='navigation-span-lg'>
              <li id={currentStep == 1 ? 'active' : undefined}>
                <span>1</span>
                <div className="step-description">
                  <h2>STEP 1</h2>
                  <h1>YOUR INFO</h1>
                </div>
              </li>
              <li id={currentStep == 2 ? 'active' : undefined}>
                <span>2</span>
                <div className="step-description">
                  <h2>STEP 2</h2>
                  <h1>SELECT PLAN</h1>
                </div>
              </li>
              <li id={currentStep == 3 ? 'active' : undefined}>
                <span>3</span>
                <div className="step-description">
                  <h2>STEP 3</h2>
                  <h1>ADD-ONS</h1>
                </div>
              </li>
              <li id={(currentStep == 4 || currentStep == 5) ? 'active' : undefined}>
                <span>4</span>
                <div className="step-description">
                  <h2>STEP 4</h2>
                  <h1>SUMMARY</h1>
                </div>
              </li>
            </ul>
          </div>
          <div className='form-content-section'>

            {currentStep < 5 && createFormBody()}

            {currentStep < 5 &&
              <div className="navigation-buttons-lg">
                {(currentStep > 1 && currentStep < 5) &&
                  <span onClick={() => prevStep()}>Go Back</span>
                }
                {currentStep == 4 &&
                  <Button id='confirm-button' onClick={() => nextStep()}>
                    Confirm
                  </Button>
                }
                {currentStep < 4 &&
                  <Button onClick={() => nextStep()}>
                    Next Step
                  </Button>
                }
              </div>
            }

            {currentStep == 5 &&
              <div className='form-completed-message-lg'>
                <img src='images/icon-thank-you.svg' />
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.</p>
              </div>
            }

          </div>
        </div>

      </div>

      <div
        className='footer'
        style={{
          backgroundColor: currentStep < 5 ? 'white' : '#f0f6ff'
        }}>
        {(currentStep > 1 && currentStep < 5) &&
          <span onClick={() => prevStep()}>Go Back</span>
        }

        {currentStep == 4 &&
          <Button id='confirm-button' onClick={() => nextStep()}>
            Confirm
          </Button>
        }

        {currentStep < 4 &&
          <Button onClick={() => nextStep()}>
            Next Step
          </Button>
        }
      </div>

    </div >
  )
}

export default App;
