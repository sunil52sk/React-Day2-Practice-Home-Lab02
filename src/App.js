import './App.css'
import Mybutton from './Component/Mybutton';
function App() {
  return (
     <div className='App'>
      <Mybutton Text="Button 1" num="1"/>
      <Mybutton Text="Button 2" num="2"/>
      <Mybutton Text="Button 3" num="3"/>
     </div>
  );
}
export default App;