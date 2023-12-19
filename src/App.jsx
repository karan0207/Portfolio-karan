import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router >
        <Navbar />
        <Routes>
          <Route path='/Portfolio-karan' element={<Home />} />
          <Route path="/Portfolio-karan/about" element={<About/>}/>
          <Route path="/Portfolio-karan/projects" element={<Projects/>}/>
          <Route path="/Portfolio-karan/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
