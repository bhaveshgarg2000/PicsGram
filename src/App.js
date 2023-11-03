import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Pictures from './Components/Title'
import FOOTER from './Components/Footer'
import Upload from './Components/Upload'
import ImageGrid from './Components/ImgGrid'
import Modal from './Components/Modal'
import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <>
      <Navbar />
      <Pictures />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      <FOOTER />
    </>
  );

}

export default App;
