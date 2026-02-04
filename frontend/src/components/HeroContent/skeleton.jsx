export const HeroContentSkeleton = () => {
  return (
    <div className='w-full max-w-[900px] p-6 bg-base-100 rounded-xl shadow-sm animate-pulse'>
      <div className='flex flex-col gap-4'>
        <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2'></div>
        <div className='h-64 bg-gray-200 dark:bg-gray-700 rounded'></div>
      </div>
    </div>
  );
};
