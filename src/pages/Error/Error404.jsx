import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page non trouvée</h1>
      <p className="text-lg text-gray-600 mb-6">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default Error404;