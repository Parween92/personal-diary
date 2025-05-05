import { useState } from 'react';
import DiaryEntry from './components/DiaryEntry';
import DiaryList from './components/DiaryList';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app text-center p-8">
      <h1 className="text-2xl font-bold mb-6">My Personal Diary</h1>
      {!isModalOpen ? (
        <div>
          <h2 className="text-xl font-bold mb-6">Add Post ↓</h2>
          
          <button onClick={openModal}> 
          {/* <div className='transform translate-y-[-40px]'> */}
          <div style={{ width: 120, height: 120 }}>
            <DotLottieReact
      src="https://lottie.host/2b817293-ad27-46da-bffd-f9c0d68eb0d8/CzOLnmoThd.lottie"
      loop
      autoplay
    />    </div>
        {/* </div> */}
    </button>
          <DiaryList />
        </div>
      ) : (
        <DiaryEntry closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
