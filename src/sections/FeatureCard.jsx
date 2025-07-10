import  { useRef } from 'react'
import { abilities } from '../../constants'


const FeatureCard = () => {

    const cardRefs = useRef([]);
  
    // when mouse moves over a card, rotate the glow effect
    const handleMouseMove = (index) => (e) => {
      // get the current card
      const card = cardRefs.current[index];
      if (!card) return;
  
      // get the mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
  
      // calculate the angle from the center of the card to the mouse
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
  
      // adjust the angle so that it's between 0 and 360
      angle = (angle + 360) % 360;
  
      // set the angle as a CSS variable
      card.style.setProperty("--start", angle + 60);
  };
  
  return (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
        {abilities.map((card,index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            key={card.title}
            className="card-border card timeline-card rounded-xl p-8 flex flex-col gap-4 reak-inside-avoid-column"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={card.imgPath} alt={card.title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{card.title}</h3>
            <p className="text-white-50 text-lg">{card.desc}</p>
          </div>
      ))}
    </div>
  </div>
  )
}

export default FeatureCard 