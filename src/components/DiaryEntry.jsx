import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function DiaryEntry({ closeModal }) {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [thoughts, setThoughts] = useState('');

  const handleSave = () => {
    if (!date || !title.trim() || !image.trim() || !thoughts.trim()) {
      alert('please fill all fields');
      return;
    }

    const newEntry = { date, title, image, thoughts };

    const existingEntries = JSON.parse(localStorage.getItem('diary')) || [];

    const match = existingEntries.some((entry) => entry.date === date);

    if (match) {
      alert('You have already a post for this date!');
      return;
    }

    existingEntries.push(newEntry);

    localStorage.setItem('diary', JSON.stringify(existingEntries));

    setDate('');
    setTitle('');
    setImage('');
    setThoughts('');
    closeModal(); // Modal schließen nach Save
  };

  return (
    <div className=' fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70'>
<div className="p-6 rounded-lg shadow-lg  bg-white w-[900px] ">
      <h2 className="text-2xl font-bold mb-6">New Diary Entry</h2>

<div className='flex flex-col flex-nowrap gap-[2em]  '>

      <input className=' bg-white p-2'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input className=' bg-white p-2'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='enter title'
      />
      <input className=' bg-white p-2'
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder='enter image url'
      />
      <input className=' bg-white p-2'
        type='text'
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
        placeholder='write your thoughts'
      />

</div>

<div className='flex gap-8 justify-center'>
      <button onClick={handleSave}>
      <div style={{ width: 120, height: 120 }}>
      <DotLottieReact
      src="https://lottie.host/0ec65f46-86b6-4859-b99a-55af4dacd39c/H5fj2Xu8vm.lottie"
      loop
      autoplay
      style={{ width: '100%', height: '100%' }}
    />
    </div>
      </button>
      <button onClick={closeModal}>
      {/* <div style={{ width: 120, height: 120 }}>
      <DotLottieReact
      src="https://lottie.host/4cd488c6-2c0d-4330-bcc1-8e2940ebb213/pzQIOTuhUT.lottie"
      loop
      autoplay
    
      style={{ width: '100%', height: '100%' }}
    />
    
    </div> */}
     <div style={{ width: 100, height: 100 }}>
     <DotLottieReact
      src="https://lottie.host/100d6195-5942-4240-bddd-57978f034d0c/ZwMvMRvqTI.lottie"
      loop
      autoplay
            style={{ width: '100%', height: '100%' }}
    /></div>
          </button>
          </div>

    </div>
    </div>
  );
}

export default DiaryEntry;