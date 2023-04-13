import React from "react"
import { useCallback } from "react"

import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"

import type { ISourceOptions, Engine } from "tsparticles-engine"
import useStyles from "./Particles.styles"

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await loadFull(engine)
  }, [])

  const options: ISourceOptions = {
    particles: {
      number: {
        value: 420,
        density: {
          enable: true,
          value_area: 785
        }
      },
      color: {
        value: "#E4F0FB"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    background: {
      color: "#1B1E28"
    }
  }

  const { classes } = useStyles()

  return (
    <Particles
      init={particlesInit}
      options={options}
      height="100vh"
      width="100vw"
      className={classes.particles}
    />
  )
}

export default ParticleBackground
