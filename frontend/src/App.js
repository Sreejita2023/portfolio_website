import Nav from "./components/Nav";
import Change from "./Change";
import Footer from "./components/Footer";
import Chat from './chat/Chat'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className=" min-h-screen w-screen relative  left-0 right-0 ">
      <Nav />
      <div className="absolute top-[80px] left-0 right-0 ">
          <Change/>
          <Footer/>
      </div>
      <Chat />
      <ToastContainer />
    </div>
  );
}

export default App;
