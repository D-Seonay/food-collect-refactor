import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import Button from './Button'



const Story = () => {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
    };
    return (
        <section className="flex flex-col items-center justify-center py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
                <img src="/assets/img/story.png" alt="Story" className="w-full h-full object-cover object-center rounded-lg p-4" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Notre histoire</h2>
                <p className="text-tertiary text-lg mb-6">Amoureux de la bonne cuisine, nous avons créé <span className='font-bold'>FoodCollect</span> après avoir constaté que de nombreux bons restaurants, passionnés par la cuisine, ont des difficultés à communiquer efficacement.

La pandémie de Covid-19 a aussi révélé le besoin de savoir quels restaurants proposaient de la vente à emporter. Nous voulions offrir une alternative aux plateformes de livraison tout en soutenant une démarche écologique. C'est pourquoi nous aidons ces restaurants au quotidien en améliorant leur visibilité et en simplifiant leur gestion.</p>
                <Button text="En savoir plus" onClick={handleButtonClick} />
            </div>
            
            
            </div>
        </div>
        </section>
    )
    }

export default Story
