import React, {useState, useEffect, useMemo} from 'react';
import './App.css';

export default function App() {
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React Hooks',
    'Assistir a 6º Temporada de SobreNatural'
  ]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    return () => {};

  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd(){
   if(input !== ""){
    setTarefas([...tarefas, input]);
    setInput('');
   }else{
    return;
   }

  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div className="App">
     <h1>Utilizando Hooks e UseMemo</h1>

     <br/>

     <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
      ))}
     </ul>
      
      <strong>Você tem {totalTarefas} tarefas.</strong>
      <input 
      type="text" 
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder='Nova tarefa' 
      style={{padding: 15, width: 300}} 
      />

      <button onClick={handleAdd} style={{width: 332, height: 40}}>Adicionar</button>
      
    </div>
  );
}
