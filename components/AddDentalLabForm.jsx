'use client';
import { toast } from 'react-toastify';
import addDentalCase from '@/app/actions/addDentalCase';

const DentalLabForm = () => {
  const handleSubmit = async (formData) => {
    const result = await addDentalCase(formData);
    
    if (result.success) {
      toast.success('Case submitted successfully');
      // Optionally redirect or clear form
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form action={handleSubmit} className="p-6 bg-gray-100 max-w-4xl mx-auto rounded-md shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">PRO-Craft Dental Lab RX Form</h2>

      {/* Pontic Design */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Pontic Design</h3>
        <label htmlFor="ridge-relief" className="block mb-2 font-bold">Ridge Relief</label>
        <div className="flex items-center mb-2">
          <input type="radio" id="ridge-relief-yes" name="ridge-relief" value="yes" className="mr-2" />
          <label htmlFor="ridge-relief-yes" className="mr-4">Yes</label>
          <input type="radio" id="ridge-relief-no" name="ridge-relief" value="no" className="mr-2" />
          <label htmlFor="ridge-relief-no">No</label>
        </div>
        <input
          type="number"
          id="ridge-relief-mm"
          name="ridge-relief-mm"
          className="border rounded w-24 py-2 px-3"
          placeholder="mm"
        />
      </div>

      {/* Implant Information */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Implant Information</h3>
        <label htmlFor="implant-brand" className="block mb-2 font-bold">Brand</label>
        <input
          type="text"
          id="implant-brand"
          name="implant-brand"
          className="border rounded w-full py-2 px-3 mb-4"
          placeholder="Brand Name"
        />
        <label htmlFor="implant-size" className="block mb-2 font-bold">Size</label>
        <input
          type="text"
          id="implant-size"
          name="implant-size"
          className="border rounded w-full py-2 px-3"
          placeholder="Size"
        />
      </div>

      {/* Occlusal Staining */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Occlusal Staining</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <label className="flex items-center">
            <input type="radio" name="occlusal-staining" value="light" className="mr-2" /> Light
          </label>
          <label className="flex items-center">
            <input type="radio" name="occlusal-staining" value="medium" className="mr-2" /> Medium
          </label>
          <label className="flex items-center">
            <input type="radio" name="occlusal-staining" value="dark" className="mr-2" /> Dark
          </label>
          <label className="flex items-center">
            <input type="radio" name="occlusal-staining" value="none" className="mr-2" /> None
          </label>
        </div>
      </div>

      {/* Doctor and Patient Information */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Doctor and Patient Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="doctor-name" className="block mb-2 font-bold">Doctor Name</label>
            <input
              type="text"
              id="doctor-name"
              name="doctor-name"
              className="border rounded w-full py-2 px-3"
              placeholder="Doctor's Name"
            />
          </div>
          <div>
            <label htmlFor="account-number" className="block mb-2 font-bold">Account Number</label>
            <input
              type="text"
              id="account-number"
              name="account-number"
              className="border rounded w-full py-2 px-3"
              placeholder="Account #"
            />
          </div>
          <div>
            <label htmlFor="patient-name" className="block mb-2 font-bold">Patient Name</label>
            <input
              type="text"
              id="patient-name"
              name="patient-name"
              className="border rounded w-full py-2 px-3"
              placeholder="Patient's Name"
            />
          </div>
          <div>
            <label htmlFor="prep-date" className="block mb-2 font-bold">Prep Date</label>
            <input
              type="date"
              id="prep-date"
              name="prep-date"
              className="border rounded w-full py-2 px-3"
            />
          </div>
        </div>
      </div>

      {/* Porcelain Options */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Porcelain Options</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <label className="flex items-center">
            <input type="checkbox" name="porcelain-options" value="creation" className="mr-2" /> Creation Porcelain
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="porcelain-options" value="bio-compatible" className="mr-2" /> Bio Compatible
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="porcelain-options" value="semi-precious" className="mr-2" /> Semi-Precious Alloy
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="porcelain-options" value="premium-ceramic" className="mr-2" /> Premium Ceramic
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default DentalLabForm;
