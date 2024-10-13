import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="App">
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />
      ) : (
        <CharacterList onSelect={setSelectedCharacter} />
      )}
    </div>
  );
};

export default App;
