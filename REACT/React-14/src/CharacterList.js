import React, { useEffect, useState } from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CharacterList = ({ onSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <Grid>
      {characters.map(character => (
        <Grid.Column key={character.id} width={4}>
          <Card onClick={() => onSelect(character)} raised>
            <Card.Content>
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>{character.species}</Card.Meta>
              <Card.Description>
                <img src={character.image} alt={character.name} />
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterList;
