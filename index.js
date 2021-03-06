//load particles.js
window.onload = function(){
    //disabled because chrome sucks
    //particlesJS.load('particles-js', 'assets/particles.json', function() {alert('callback - particles.js config loaded');});    
    //TODO: investigate image option for particles
    particlesJS('particles-js',
        {
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 1000
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 12
              },
              "image": {
                "src": "assets/Logo.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.3,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 300,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
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
                "distance": 250,
                "size": 7,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.5
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
        }, function() {console.log("i hate life")});
};
