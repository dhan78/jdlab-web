'use client';
import { toast } from 'react-toastify';
import addCase from '@/app/actions/addCase';

const CaseAddForm = () => {
  return (
    <form action={addCase}>
      <h2 className='text-3xl text-center font-semibold mb-6'>Add New Case</h2>

      {/* Patient & Doctor Info */}
      <div className='mb-4'>
        <label htmlFor='patientName' className='block text-gray-700 font-bold mb-2'>
          Patient Name
        </label>
        <input
          type='text'
          id='patientName'
          name='patientName'
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='doctor' className='block text-gray-700 font-bold mb-2'>
          Doctor
        </label>
        <input
          type='text'
          id='doctor'
          name='doctor'
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='deliveryAddress' className='block text-gray-700 font-bold mb-2'>
          Delivery Address
        </label>
        <input
          type='text'
          id='deliveryAddress'
          name='deliveryAddress'
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      {/* Material Selection */}
      <div className='mb-4'>
        <label htmlFor='material' className='block text-gray-700 font-bold mb-2'>
          Material
        </label>
        <select
          id='material'
          name='material'
          className='border rounded w-full py-2 px-3'
          required
        >
          <option value=''>Select Material</option>
          <option value='Zirconia Monolithic'>Zirconia Monolithic</option>
          <option value='E.max'>E.max</option>
          <option value='PFM'>PFM</option>
          <option value='Full Gold'>Full Gold</option>
        </select>
      </div>

      {/* Shades */}
      <div className='mb-4 bg-blue-50 p-4'>
        <h3 className='text-lg font-bold mb-3'>Shades</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label htmlFor='shades.base' className='block text-gray-700 font-bold mb-2'>
              Base Shade
            </label>
            <input
              type='text'
              id='shades.base'
              name='shades.base'
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>
          <div>
            <label htmlFor='shades.gingival' className='block text-gray-700 font-bold mb-2'>
              Gingival Shade
            </label>
            <input
              type='text'
              id='shades.gingival'
              name='shades.gingival'
              className='border rounded w-full py-2 px-3'
            />
          </div>
          <div>
            <label htmlFor='shades.incisal' className='block text-gray-700 font-bold mb-2'>
              Incisal Shade
            </label>
            <input
              type='text'
              id='shades.incisal'
              name='shades.incisal'
              className='border rounded w-full py-2 px-3'
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className='mb-4 bg-blue-50 p-4'>
        <h3 className='text-lg font-bold mb-3'>Preferences</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='preferences.crownUnderPartial' className='block text-gray-700 font-bold mb-2'>
              Crown Under Partial
            </label>
            <select
              id='preferences.crownUnderPartial'
              name='preferences.crownUnderPartial'
              className='border rounded w-full py-2 px-3'
            >
              <option value='No'>No</option>
              <option value='Yes'>Yes</option>
            </select>
          </div>

          <div>
            <label htmlFor='preferences.occlusalContact' className='block text-gray-700 font-bold mb-2'>
              Occlusal Contact
            </label>
            <select
              id='preferences.occlusalContact'
              name='preferences.occlusalContact'
              className='border rounded w-full py-2 px-3'
            >
              <option value='Light'>Light</option>
              <option value='Medium'>Medium</option>
              <option value='Heavy'>Heavy</option>
            </select>
          </div>

          <div>
            <label htmlFor='preferences.proximalContact' className='block text-gray-700 font-bold mb-2'>
              Proximal Contact
            </label>
            <select
              id='preferences.proximalContact'
              name='preferences.proximalContact'
              className='border rounded w-full py-2 px-3'
            >
              <option value='Light'>Light</option>
              <option value='Medium'>Medium</option>
              <option value='Heavy'>Heavy</option>
            </select>
          </div>

          <div>
            <label htmlFor='preferences.occlusalStaining' className='block text-gray-700 font-bold mb-2'>
              Occlusal Staining
            </label>
            <select
              id='preferences.occlusalStaining'
              name='preferences.occlusalStaining'
              className='border rounded w-full py-2 px-3'
            >
              <option value='Light'>Light</option>
              <option value='Medium'>Medium</option>
              <option value='Heavy'>Heavy</option>
              <option value='None'>None</option>
            </select>
          </div>
        </div>

        <div className='mt-4'>
          <label htmlFor='preferences.anatomicalDesign' className='block text-gray-700 font-bold mb-2'>
            Anatomical Design
          </label>
          <textarea
            id='preferences.anatomicalDesign'
            name='preferences.anatomicalDesign'
            className='border rounded w-full py-2 px-3'
            rows='2'
          ></textarea>
        </div>

        <div className='mt-4'>
          <label htmlFor='preferences.occlusalClearance' className='block text-gray-700 font-bold mb-2'>
            Occlusal Clearance
          </label>
          <textarea
            id='preferences.occlusalClearance'
            name='preferences.occlusalClearance'
            className='border rounded w-full py-2 px-3'
            rows='2'
          ></textarea>
        </div>
      </div>

      {/* Notes */}
      <div className='mb-4'>
        <label htmlFor='notes' className='block text-gray-700 font-bold mb-2'>
          Additional Notes
        </label>
        <textarea
          id='notes'
          name='notes'
          className='border rounded w-full py-2 px-3'
          rows='4'
        ></textarea>
      </div>

      {/* Attachments */}
      <div className='mb-6'>
        <label htmlFor='attachments' className='block text-gray-700 font-bold mb-2'>
          Attachments
        </label>
        <input
          type='file'
          id='attachments'
          name='attachments'
          className='border rounded w-full py-2 px-3'
          multiple
          accept='.stl,.obj,.pdf,image/*'
        />
        <p className='text-sm text-gray-500 mt-1'>
          Upload STL files, images, or documents related to the case
        </p>
      </div>

      {/* Submit Button */}
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit Case
        </button>
      </div>
    </form>
  );
};

export default CaseAddForm; 