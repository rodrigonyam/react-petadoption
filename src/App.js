import React, { useState } from 'react';
import './App.css';
import PetGallery from './components/PetGallery';
import { petsData } from './data/petsData';

function App() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [adoptedPets, setAdoptedPets] = useState(new Set());
  const [showAdopted, setShowAdopted] = useState(true);

  const handleAdopt = (petId) => {
    setAdoptedPets(prev => new Set([...prev, petId]));
  };

  const filteredPets = petsData.filter(pet => {
    const matchesFilter = filter === 'all' || pet.type.toLowerCase() === filter.toLowerCase();
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAdopted = showAdopted || !adoptedPets.has(pet.id);
    return matchesFilter && matchesSearch && matchesAdopted;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>🐾 Pet Adoption Gallery</h1>
        <p>Find your perfect furry companion!</p>
      </header>

      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="adopted-toggle-container">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={showAdopted}
              onChange={(e) => setShowAdopted(e.target.checked)}
              className="toggle-checkbox"
            />
            <span className="toggle-text">
              {showAdopted ? '✅ Show adopted pets' : '❌ Hide adopted pets'}
            </span>
          </label>
        </div>

        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All Pets
          </button>
          <button 
            className={filter === 'dog' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('dog')}
          >
            🐕 Dogs
          </button>
          <button 
            className={filter === 'cat' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('cat')}
          >
            🐱 Cats
          </button>
          <button 
            className={filter === 'rabbit' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('rabbit')}
          >
            🐰 Rabbits
          </button>
          <button 
            className={filter === 'fish' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('fish')}
          >
            🐠 Fish
          </button>
          <button 
            className={filter === 'rat' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('rat')}
          >
            🐀 Rats
          </button>
          <button 
            className={filter === 'guinea pig' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('guinea pig')}
          >
            🐹 Guinea Pigs
          </button>
          <button 
            className={filter === 'hamster' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('hamster')}
          >
            🐹 Hamsters
          </button>
          <button 
            className={filter === 'ferret' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('ferret')}
          >
            🦫 Ferrets
          </button>
          <button 
            className={filter === 'bird' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('bird')}
          >
            🐦 Birds
          </button>
          <button 
            className={filter === 'bearded dragon' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('bearded dragon')}
          >
            🦎 Bearded Dragons
          </button>
          <button 
            className={filter === 'chinchilla' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('chinchilla')}
          >
            🐭 Chinchillas
          </button>
          <button 
            className={filter === 'turtle' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('turtle')}
          >
            🐢 Turtles
          </button>
          <button 
            className={filter === 'snake' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('snake')}
          >
            🐍 Snakes
          </button>
          <button 
            className={filter === 'horse' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('horse')}
          >
            🐎 Horses
          </button>
          <button 
            className={filter === 'leopard gecko' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('leopard gecko')}
          >
            🦎 Leopard Geckos
          </button>
          <button 
            className={filter === 'tarantula' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('tarantula')}
          >
            🕷️ Tarantulas
          </button>
        </div>
      </div>

      <PetGallery 
        pets={filteredPets} 
        onAdopt={handleAdopt} 
        adoptedPets={adoptedPets} 
      />

      <footer className="app-footer">
        <p>💝 Every pet deserves a loving home</p>
      </footer>
    </div>
  );
}

export default App;