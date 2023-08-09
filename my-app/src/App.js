import Compo from './components/component.js';
import './App.css';

function App() {
  let cname= "DEbashis";
  let cadd ="sampoi";
  return (
    <Compo  name={cname}
          add = {cadd} />
  );
}

export default App;
