import React from 'react';
import './PetCard.css';

const PetCard = ({ pet, onAdopt, isAdopted }) => {
  const handleAdopt = () => {
    if (isAdopted) {
      alert(`${pet.name} has already been adopted! Thank you for your interest.`);
      return;
    }
    onAdopt(pet.id);
    alert(`Congratulations! You've successfully adopted ${pet.name}! 🎉 Please contact the adoption center to complete the process.`);
  };

  const getTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'dog': return '🐕';
      case 'cat': return '🐱';
      case 'rabbit': return '🐰';
      case 'fish': return '🐠';
      case 'rat': return '🐀';
      case 'guinea pig': return '🐹';
      case 'hamster': return '🐹';
      case 'ferret': return '🦫';
      case 'bird': return '🐦';
      case 'bearded dragon': return '🦎';
      case 'chinchilla': return '🐭';
      case 'turtle': return '🐢';
      case 'snake': return '🐍';
      case 'horse': return '🐎';
      case 'leopard gecko': return '🦎';
      case 'tarantula': return '🕷️';
      default: return '🐾';
    }
  };

  const getAgeColor = (age) => {
    if (age <= 1) return 'young';
    if (age <= 5) return 'adult';
    return 'senior';
  };

  return (
    <div className={`pet-card ${isAdopted ? 'adopted' : ''}`}>
      <div className="pet-image-container">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="pet-type-badge">
          {getTypeIcon(pet.type)}
        </div>
        {isAdopted && (
          <div className="adopted-badge">
            ✅ ADOPTED
          </div>
        )}
      </div>
      
      <div className="pet-info">
        <h3 className="pet-name">{pet.name}</h3>
        <p className="pet-breed">{pet.breed}</p>
        
        <div className="pet-details">
          <span className={`pet-age ${getAgeColor(pet.age)}`}>
            {pet.age} year{pet.age !== 1 ? 's' : ''} old
          </span>
          <span className="pet-gender">{pet.gender}</span>
        </div>

        <div className="pet-traits">
          {pet.traits && pet.traits.map((trait, index) => (
            <span key={index} className="trait-tag">{trait}</span>
          ))}
        </div>

        <p className="pet-description">{pet.description}</p>

        <div className="pet-location">
          📍 {pet.location}
        </div>
      </div>

      <div className="pet-actions">
        <button className={`adopt-btn ${isAdopted ? 'adopted' : ''}`} onClick={handleAdopt}>
          {isAdopted ? '✅ Adopted!' : '💕 Adopt Me'}
        </button>
        <button className="learn-more-btn">
          ℹ️ Learn More
        </button>
      </div>
    </div>
  );
};

export default PetCard;