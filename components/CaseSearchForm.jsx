'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CaseSearchForm = () => {
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();
    if (patientName) query.append('patientName', patientName);
    if (doctor) query.append('doctor', doctor);

    router.push(`/cases/search-results?${query.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
    >
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='patientName' className='sr-only'>
          Patient Name
        </label>
        <input
          type='text'
          id='patientName'
          placeholder='Enter Patient Name'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div className='w-full md:w-2/5 md:pl-2'>
        <label htmlFor='doctor' className='sr-only'>
          Doctor
        </label>
        <input
          type='text'
          id='doctor'
          placeholder='Enter Doctor Name'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </div>
      <div className='w-full md:w-auto md:pl-2'>
        <button
          type='submit'
          className='w-full px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CaseSearchForm;