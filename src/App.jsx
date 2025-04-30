import { useEffect, useState } from "react";
import Modal from "./Components/Modal";

const App = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const openModal = () => {
    const homepage = document.getElementById("homepage");
    homepage.classList.add ('bg-gray-900', 'opacity-70');
  };
})}
  return (
    <div id="homepage" className="text-center">
      <h1 className="text-3xl text-center font-bold">My Personal Diary</h1>
      <button onClick={() => openModal()}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-5xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"></path>
          <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z"></path>
        </svg>
      </button>
      <div className="grid grid-cols-3">
      <div>
      <h2>Title</h2>
      <div>Test</div>
    </div>
    </div>
    </div>
  );


export default App;
