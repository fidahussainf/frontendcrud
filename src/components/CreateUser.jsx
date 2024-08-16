import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/users';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import StepOne from './userCreatation/StepOne';
import StepTwo from './userCreatation/StepTwo';
import StepThree from './userCreatation/StepThree';

const CreateUser = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    fname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return user.fname && user.lastname;
      case 2:
        return user.email && user.phone;
      case 3:
        return user.password;
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) {
      toast.error('Please complete all fields before submitting.');
      return;
    }
    dispatch(addUser(user));
    toast.success('User created successfully');
    setTimeout(() => {
      navigate('/all-users');
    }, 2000);
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      toast.error(
        'Please complete all fields before proceeding to the next step.'
      );
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className='container mx-auto p-4 bg-white shadow-lg rounded-lg'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Create User</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {step === 1 && <StepOne user={user} handleChange={handleChange} />}
        {step === 2 && <StepTwo user={user} handleChange={handleChange} />}
        {step === 3 && <StepThree user={user} handleChange={handleChange} />}

        <div className='flex justify-between'>
          {step > 1 && (
            <button
              type='button'
              onClick={prevStep}
              className='bg-gray-500 text-white py-2 px-4 rounded'
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type='button'
              onClick={nextStep}
              className='bg-blue-500 text-white py-2 px-4 rounded'
            >
              Next
            </button>
          ) : (
            <button
              type='submit'
              className='bg-blue-500 text-white py-2 px-4 rounded'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
