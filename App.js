import { useState } from 'react'; 
import './App.css';



function App() {
  const [numero, setnumber] = useState(0);

  function contagem(){
setnumber(numero + 1);

console.log(numero);

  }
 function resetnumber(){
setnumber(0);
console.log("Contagem resetada para:", 0);
 }
 
  return(

<div className='div01'>
<button className='buttonreset' onClick={resetnumber} id='reset01'>Reset</button>
<h1>Speed Click</h1>

<p id='reset'>
Contagem: {numero}
</p>
<button className='buttonstart' onClick={contagem}>Click</button>

</div>


  )
}

export default App;
