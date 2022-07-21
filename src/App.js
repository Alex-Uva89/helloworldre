import Button from './components/button'
import Input from './components/input'
import Counter from './components/counter'
import './index.css'

function App() {
  const cliccami = () => {console.log('cliccato funzione')}
  const link = "http://google.it"


  return (
    <>
    <div className='container'>
      <h1>Testo modificato con CSS</h1>

      <button>Semplice bottone</button>
      <button onClick={() => { console.log('onClick')}}>onClick=(() => ( console.log('onClick')))</button>
      <button onClick={cliccami}>onClick=(cliccami)</button>


      <div className='divisore'>Bottoni creati con componente</div>
      <Button label="Bottone con props: label, color e bgColor" color="yellow" bgColor="blue" onClick={() => { console.log('cliccato testo alternativo')}}></Button>
      <Button>Testo inserito con children</Button>
      <a href={link}>Vai a google link tramite props</a>

      <Input />
      <div className='boxButton'>
        <div>
          <span>parte da 0</span>
          <Counter countInit={0} />
        </div>
        <div>
          <span>parte da 5</span>
          <Counter countInit={5} />
        </div>
      </div>
      
    </div>

    </>

      
    
  );
}

export default App;
