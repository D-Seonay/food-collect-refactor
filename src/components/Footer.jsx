import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-quaternary text-tertiary py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo et Droits */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="/">
            <img src="/assets/logo.svg" alt="Logo" className="w-24" />
          </a>
          <p className="text-sm text-tertiary text-center md:text-left">
            © 2024 Food-Collect. Tous droits réservés.
          </p>
        </div>

        {/* Plan du site */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold text-tertiary text-center md:text-left">
            Plan du site
          </h3>
          <ul className="space-y-2 text-tertiary">
            <li><a href="/" className="hover:text-secondary transition">Accueil</a></li>
            <li><a href="/nos-offres" className="hover:text-secondary transition">Nos offres</a></li>
            <li><a href="/nos-solutions" className="hover:text-secondary transition">Nos solutions</a></li>
            <li><a href="/espace-restaurant" className="hover:text-secondary transition">Espace restaurant</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold text-tertiary text-center md:text-left">
            Suivez-nous
          </h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/foodcollect.fr/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-tertiary hover:text-secondary transition">
              <FaFacebook size={36} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-tertiary hover:text-secondary transition">
              <FaTwitter size={36} />
            </a>
            <a href="https://www.instagram.com/foodcollect_fr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-tertiary hover:text-secondary transition">
              <FaInstagram size={36} />
            </a>
            <a href="https://www.linkedin.com/company/foodcollect/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-tertiary hover:text-secondary transition">
              <FaLinkedin size={36} />
            </a>
          </div>
        </div>
      </div>

      {/* Mentions légales, CGU, contact */}
      <div className="container mx-auto px-6 md:px-12 mt-8 text-center md:text-left">
        <div className="border-t border-tertiary pt-4">
          <ul className="flex flex-col md:flex-row justify-center md:justify-between space-y-2 md:space-y-0">
            <li><a href="/mentions-legales" className="hover:text-secondary transition">Mentions légales</a></li>
            <li><a href="/cgu" className="hover:text-secondary transition">Conditions Générales d'Utilisation</a></li>
            <li>Email : <a href="mailto:contact@foodcollect.com" className="hover:text-secondary transition">contact@foodcollect.com</a></li>
            <li>Téléphone : <a href="tel:+1234567890" className="hover:text-secondary transition">+33 6 70 44 44 29</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;