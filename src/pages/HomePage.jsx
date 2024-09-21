import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue sur notre site !</h1>
      <p className="text-lg text-gray-600 mb-6">
        Découvrez nos offres et solutions adaptées à vos besoins. 
        Nous sommes là pour vous accompagner dans votre projet.
      </p>
      <a 
        href="/about" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        En savoir plus
      </a>
    </div>
  );
};

export default HomePage;