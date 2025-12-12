import React from 'react';
import PetCard from './PetCard';
import './PetGallery.css';

const PetGallery = ({ pets, onAdopt, adoptedPets }) => {
  if (pets.length === 0) {
    return (
      <div className="no-pets-container">
        <div className="no-pets-message">
          <h3>🔍 No pets found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pet-gallery">
      <div className="gallery-header">
        <h2>Available Pets ({pets.length})</h2>
      </div>
      
      <div className="pets-grid">
        {pets.map(pet => (
          <PetCard 
            key={pet.id} 
            pet={pet} 
            onAdopt={onAdopt}
            isAdopted={adoptedPets.has(pet.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PetGallery;