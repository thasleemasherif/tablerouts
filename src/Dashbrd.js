import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AllLinks  from './AllLinks';

const Dashbrd = () =>
{
    return (
        <div>
            <BrowserRouter>
                <AllLinks />
                <hr />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter> 
        </div>
    );
}

export default Dashbrd;