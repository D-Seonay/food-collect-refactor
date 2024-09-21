import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Exemple de données pour les projets
const projects = [
  {
    id: 1,
    image: 'assets/img/testimonials/benjamin.png',
    author: 'Benjamin',
    description: 'Grâce à cette solution, nous avons pu gagner beaucoup de temps grâce au module de réservation',
    restaurant: 'Les Baigneuses',
  },
  {
    id: 2,
    image: 'assets/img/testimonials/giuseppe.png',
    author: 'Giuseppe',
    description: 'Avec FoodCollect, on gagne un temps précieux, les réservations sont simples et rapides, un clic suffit.',
    restaurant: 'Da Peppe',
  },
  {
    id: 3,
    image: 'assets/img/testimonials/olivier.png',
    author: 'Olivier',
    description: 'Toute l’équipe est super pro ! Totalement adapté aux besoins d’une petite structure comme la nôtre. Merci de nous accompagner dans notre développement.',
    restaurant: 'Le Josephine B',
  },
  {
    id: 4,
    image: 'assets/img/testimonials/andre.png',
    author: 'André',
    description: "Avec FoodCollect, on me signale toutes les nouvelles réservations, ce qui m'aide beaucoup quotidiennement.",
    restaurant: 'Joie',
  },
];

const Carousel = () => {
  return (
    <div className="container mx-auto pb-32 px-4">
      <Swiper
        slidesPerView={3} // Affiche 3 cartes par défaut
        spaceBetween={30} // Espace entre les cartes
        autoplay={{
          delay: 2500, // Temps avant le défilement automatique
          disableOnInteraction: false, // Permet à l'utilisateur d'interagir sans désactiver l'autoplay
        }}
        loop={true} // Active le loop pour faire défiler en boucle
        modules={[Autoplay, Pagination]} // Active les modules nécessaires
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, // Affiche 1 carte sur les écrans petits
          },
          768: {
            slidesPerView: 2, // Affiche 2 cartes sur les écrans moyens
          },
          1024: {
            slidesPerView: 3, // Affiche 3 cartes sur les écrans grands
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex h-full min-h-60">
            <img
              src={project.image}
              alt={project.title}
              className="w-1/4 h-100 object-cover"
            />
            <div className="p-4 w-3/4 flex flex-col justify-between">
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="flex items-center">
              <p className="text-gray-800 text-sm mt-2 text-bottom font-bold">{project.author}</p>
              <p className="text-gray-500 text-sm mt-2 mx-2 text-bottom">  |  </p>
              <p className="text-gray-500 text-sm mt-2 text-bottom">{project.restaurant}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;