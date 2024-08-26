/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'roboto':'Roboto',
        'Montserrat':'Montserrat'
      },
      colors:{
        'navy_blue':'#002b5b',
        'gold':'#ffd700',
        'light_gray':'#f0f0f0',
        'chareoal_gray':'#333333',
      },
      width: {
      'laptop': '1024px',
      '100':'100%'
    },
     transitionProperty:{
      'all_liner':'all liner 0.4s'
     },
     backgroundImage: {
     'banner_img':"url('../img/banner_img.png')"
     
    },
    boxShadow: {
      'box_shadow': ' 0px 5.33px 16px 0px #00000026',
      'box_shadow_0': '0px,0px,0px,0px '

    },

    animation: {
      'circle-progress': 'strokeAnimation 5s ease-in-out forwards',
    },
    keyframes: {
      strokeAnimation: {
        '0%': { strokeDashoffset: '283' },
        '100%': { strokeDashoffset: '0' },
      },
      plugins: [],
    
    }
  }
  }
}






  


