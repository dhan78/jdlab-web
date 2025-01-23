import Link from 'next/link';

const CaseCard = ({ caseItem }) => {
  return (
    <div className='rounded-xl shadow-md relative p-4'>
      <div className='text-left md:text-center lg:text-left mb-6'>
        <div className='text-gray-600'>Case ID: {caseItem.orderId}</div>
        <h3 className='text-xl font-bold'>{caseItem.patientName}</h3>
        <p className='text-gray-500'>Doctor: {caseItem.doctor}</p>
        <p className='text-gray-500'>Delivery Address: {caseItem.deliveryAddress}</p>
        <p className='text-gray-500'>Material: {caseItem.material}</p>
        <p className='text-gray-500'>Shades:</p>
        <ul className='text-gray-500'>
          <li>Base: {caseItem.shades.base}</li>
          <li>Gingival: {caseItem.shades.gingival}</li>
          <li>Incisal: {caseItem.shades.incisal}</li>
        </ul>
        <p className='text-gray-500'>Preferences:</p>
        <ul className='text-gray-500'>
          <li>Crown Under Partial: {caseItem.preferences.crownUnderPartial}</li>
          <li>Occlusal Contact: {caseItem.preferences.occlusalContact}</li>
          <li>Proximal Contact: {caseItem.preferences.proximalContact}</li>
          <li>Occlusal Staining: {caseItem.preferences.occlusalStaining}</li>
          <li>Anatomical Design: {caseItem.preferences.anatomicalDesign}</li>
          <li>Occlusal Clearance: {caseItem.preferences.occlusalClearance}</li>
        </ul>
        <p className='text-gray-500'>Notes: {caseItem.notes}</p>
        <p className='text-gray-500'>Status: {caseItem.status}</p>
      </div>
      <div className='flex justify-between items-center'>
        <Link href={`/cases/${caseItem.orderId}`} className='text-blue-500 hover:underline'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;