import { useCallback } from "react";
import Particles from "react-particles";
import { loadFirePreset } from "tsparticles-preset-fire";

const ParticlesBack = () => {
  const particlesInit = useCallback(async (engine) => {
    
    await loadFirePreset(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
   
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 15,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
          },
            // opacity: {
            //   value: { min: 0.1, max: 0.5 },
            // },
        //   opacity: 0,
          size: {
            value: { min: 2, max: 4 },
          },
          move: {
            enable: true,
            speed: 5,
            random: false,
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        background: {
            // image: 'radial-gradient(#4a0000, #000)',
          opacity: 0,
        },
      }}
    />
  );
};
export default ParticlesBack;
