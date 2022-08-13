
import './App.scss';
import { lazy, Suspense,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Loading from './components/shared/Loading/Loading'
import Aos from 'aos';
import "aos/dist/aos.css";




const Home = lazy(() => import('./pages/Home'));


function App() {
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);

 

  return (
    <Router>
     <Suspense fallback={<Loading />}>

    

     <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home/>}/>

      </Routes>
      </Suspense>
    </Router>
  );
}
export default App;