import CaseCard from '@/components/CaseCard';
import CaseSearchForm from '@/components/CaseSearchForm';
import Pagination from '@/components/Pagination';
import Case from '@/models/Case';
import connectDB from '@/config/database';

const CasesPage = async ({ searchParams: { pageSize = 9, page = 1 } }) => {
  await connectDB();
  const skip = (page - 1) * pageSize;

  const total = await Case.countDocuments({});
  const cases = await Case.find({}).skip(skip).limit(pageSize);

  // Calculate if pagination is needed
  const showPagination = total > pageSize;
  // console.log(cases)
  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
          <CaseSearchForm />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h1 className='text-2xl mb-4'>Browse Cases</h1>
          {cases.length === 0 ? (
            <p>No cases found</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {cases.map((caseItem, index) => (
                <CaseCard caseItem={caseItem} key={index} />
              ))}
            </div>
          )}
          {showPagination && (
            <Pagination
              page={parseInt(page)}
              pageSize={parseInt(pageSize)}
              totalItems={total}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default CasesPage;
