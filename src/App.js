import { useState } from "react";



function App() {

  const [characters, setCharacters] = useState([]);

  function addNewCharacter(newCharac){
    setCharacters((characters) => [...characters, newCharac]);
  }

  console.log(characters);

  return(
    <div>
      <CharacterList addNewCharacter={addNewCharacter} />
    </div>
  )
}

export default App;

function CharacterList({addNewCharacter}){
  return (
    <div>
      <h1>Game Character Builder</h1>
      <AddCharacter addNewCharacter={addNewCharacter} />
    </div>
  );
};

function AddCharacter({addNewCharacter}){
  const [name, setName] = useState('');
  const [age, setAge] = useState(5);
  const [height, setHeight] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [stamina, setStamina] = useState(5);
  const [health, setHealth] = useState(5);


  function handleSubmit(e){
    e.preventDefault();
    
    // if (!name || !age || !height || !energy || !stamina || !health) return;

    const id = crypto.randomUUID();

    const newCharacter = {
      id,
      name,
      age,
      height,
      energy,
      stamina,
      health
    }

    addNewCharacter(newCharacter);

  }

  return <div>
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Character Name : </label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
      <label>Age : </label>
      <input type="text" value={age} onChange={(e)=> setAge(Number(e.target.value))}></input>
      <label>Height : </label>
      <input type="text" value={height} onChange={(e)=> setHeight(Number(e.target.value))}></input>
      <label>Energy : </label>
      <input type="text" value={energy} onChange={(e)=> setEnergy(Number(e.target.value))}></input>
      <label>Stamina : </label>
      <input type="text" value={stamina} onChange={(e)=> setStamina(Number(e.target.value))}></input>
      <label>Health : </label>
      <input type="text" value={health} onChange={(e)=> setHealth(Number(e.target.value))}></input>
      <label></label>
      <Button>Create</Button>
    </form>
  </div>
}

function Button ({children}){
  return <button className="button">{children}</button>
}
