import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../../constants'
import TechIcon from '../components/models/TechLogo/TechIcon'

const TechStack = () => {

    useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon,index) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack

    // {techStackIcons.map((icon,index) => (
    //         <div
    //           key={icon.name}
    //           className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
    //         >
    //           {/* The tech-card-animated-bg div is used to create a background animation when the 
    //               component is hovered. */}
    //           <div className="tech-card-animated-bg" />
    //           <div className="tech-card-content">
    //             {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
    //                 which renders the 3D model of the tech stack icon. */}
    //             <div className="tech-icon-wrapper">
    //               <TechIcon model={icon} />
    //             </div>
    //             {/* The padding-x and w-full classes are used to add horizontal padding to the 
    //                 text and make it take up the full width of the component. */}
    //             <div className="padding-x w-full">
    //               {/* The p tag contains the name of the tech stack icon. */}
    //               <p>{icon.name}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}