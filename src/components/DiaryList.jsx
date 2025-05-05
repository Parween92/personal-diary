import { useEffect, useState } from 'react';

function DiaryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stroedEntries = JSON.parse(localStorage.getItem('diary')) || [];
    setEntries(stroedEntries);
  }, []);

  //   console.log(entries);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-[1000px] m-auto'>
     
  

      {entries.length === 0 ? (
        <p>No diary entries found</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index}
          className='flex flex-col mx-auto items-start   rounded-lg  bg-slate-200 w-[300px] cursor-pointer'>
            
            <div className='card-title p-4'>
              <p>{entry.date}</p>
            <p>{entry.title}</p>
            </div>

            <img src={entry.image} alt=''
            className='h-[200px] w-full rounded-b-lg object-cover' />
            <p className='card-thoughts p-4'>{entry.thoughts}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DiaryList;