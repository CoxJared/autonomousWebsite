import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class ParticleField extends Component {
    render() {
        return (
            <Particles
            width='100%'
            height='1000px'
            params={{
                particles: {
                    number: {
                      value: 15,
                      density: {
                        enable: true,
                        value_area: 200
                      }
                    },
                    "color": {
                      value: "#136"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 10
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 3,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 10,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 300,
                      "color": "#136",
                      "opacity": 0.4,
                      "width": 2
                    },
                    "move": {
                      "enable": true,
                      "speed": 3,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": true,
                      "attract": {
                        "enable": false,
                        "rotateX": 1000,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 800,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 800,
                        "size": 80,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 400,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
            }}/>
        )
    }
}

export default ParticleField
