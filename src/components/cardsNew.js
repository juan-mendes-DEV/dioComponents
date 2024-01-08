class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles())
    
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card")

        const cardConteudo = document.createElement("div");
        cardConteudo.setAttribute("class","card_conteudo")

        const tituloOne = document.createElement("h1")
        tituloOne.setAttribute("class","neon")
        tituloOne.textContent = this.getAttribute("titulo");

        const tituloTwo = document.createElement("h3")
        tituloTwo.textContent = this.getAttribute("tituloDois")
        
        const paragrafo = document.createElement("p")
        paragrafo.textContent = this.getAttribute("paragrafo")

        cardConteudo.appendChild(tituloOne)
        cardConteudo.appendChild(tituloTwo)
        cardConteudo.appendChild(paragrafo)

        const imagem = document.createElement("div");
        imagem.setAttribute("class","imagem neon-container")

        const newImagem = document.createElement("img")
        newImagem.src = this.getAttribute("photo") || "assets/img/default-profile.png"
        newImagem.alt = "imagem da noticia"
        imagem.appendChild(newImagem)


        componentRoot.appendChild(cardConteudo)
        componentRoot.appendChild(imagem)
    

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent=`
       
        .card{
            width: 100%;
            max-width: 800px;
            height: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: row-reverse;
            background-image: linear-gradient(rgb(184, 184, 184),rgb(80, 80, 80));
            border-radius: 20px;
            text-align: center;
            transition:0.6s;
        }
        .card:hover{
          transform: scale(1.2);
        }
        .card h1,h3{
            padding-bottom: 20px;
            font-family: 'Silkscreen', sans-serif;
        }
        .card h3, .card p{
            color: #ffffff;
            font-weight: bold;
            font-style: italic;
            font-family: 'Silkscreen', sans-serif;
        }
        .imagem img{
            width: 300px;
            height: 300px;
            border-radius: 20px;
            border: none;
        }
        
        .neon {
            animation: neon 1s ease infinite;
            -moz-animation: neon 1s ease infinite;
            -webkit-animation: neon 1s ease infinite;
          }
          
          @keyframes neon {
            0%,
            100% {
              text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
              color: #FED128;
            }
            50% {
              text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
              color: #806914;
            }
          }
        
        
          .neon-container {
            display: inline-block;
            position: relative;
          }
          
          .neon-container::before {
            content: "";
            display: block;
            border-radius: 20px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            animation: neonn 1s ease infinite;
          }
          
          @keyframes neonn {
            0%,
            100% {
              box-shadow: 0 0 1vw #ff9100, 0 0 3vw #ff9100, 0 0 10vw #ff9100, 0 0 10vw #ff9100, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
              color: #FED128;
            }
            50% {
              box-shadow: 0 0 .5vw #ff9100, 0 0 1.5vw #ff9100, 0 0 5vw #ad6200, 0 0 5vw #8b4f00, 0 0 .2vw #7e4700, .5vw .5vw .1vw #40340A;
              color: #806914;
            }
          }
        `

        return style;
    }
}
class CardnewsLeft extends HTMLElement{
  constructor(){
      super();

      const shadow = this.attachShadow({mode:"open"});
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles())
  
  }
  build(){
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class","card")

      const cardConteudo = document.createElement("div");
      cardConteudo.setAttribute("class","card_conteudo")

      const tituloOne = document.createElement("h1")
      tituloOne.setAttribute("class","neon")
      tituloOne.textContent = this.getAttribute("titulo");

      const tituloTwo = document.createElement("h3")
      tituloTwo.textContent = this.getAttribute("tituloDois")
      
      const paragrafo = document.createElement("p")
      paragrafo.textContent = this.getAttribute("paragrafo")

      cardConteudo.appendChild(tituloOne)
      cardConteudo.appendChild(tituloTwo)
      cardConteudo.appendChild(paragrafo)

      const imagem = document.createElement("div");
      imagem.setAttribute("class","imagem neon-container")

      const newImagem = document.createElement("img")
      newImagem.src = this.getAttribute("photo") || "assets/img/default-profile.png"
      newImagem.alt = "imagem da noticia"
      imagem.appendChild(newImagem)


      componentRoot.appendChild(cardConteudo)
      componentRoot.appendChild(imagem)
  

      return componentRoot;
  }

  styles(){
      const style = document.createElement("style");
      style.textContent=`
     
      .card{
          width: 100%;
          max-width: 800px;
          height: 300px;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom:40px;
          display: flex;
          background-image: linear-gradient(rgb(184, 184, 184),rgb(80, 80, 80));
          border-radius: 20px;
          text-align: center;
          transition:0.6s;
      }
      .card:hover{
        transform: scale(1.2);
      }
      .card h1,h3{
          padding-bottom: 20px;
          font-family: 'Silkscreen', sans-serif;
      }
      .card h3, .card p{
          color: #ffffff;
          font-weight: bold;
          font-style: italic;
          font-family: 'Silkscreen', sans-serif;
      }
      .imagem img{
          width: 300px;
          height: 300px;
          border-radius: 20px;
          border: none;
      }
      
      .neon {
          animation: neon 1s ease infinite;
          -moz-animation: neon 1s ease infinite;
          -webkit-animation: neon 1s ease infinite;
        }
        
        @keyframes neon {
          0%,
          100% {
            text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
            color: #FED128;
          }
          50% {
            text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
            color: #806914;
          }
        }
      
      
        .neon-container {
          display: inline-block;
          position: relative;
        }
        
        .neon-container::before {
          content: "";
          display: block;
          border-radius: 20px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          animation: neonn 1s ease infinite;
        }
        
        @keyframes neonn {
          0%,
          100% {
            box-shadow: 0 0 1vw #ff9100, 0 0 3vw #ff9100, 0 0 10vw #ff9100, 0 0 10vw #ff9100, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
            color: #FED128;
          }
          50% {
            box-shadow: 0 0 .5vw #ff9100, 0 0 1.5vw #ff9100, 0 0 5vw #ad6200, 0 0 5vw #8b4f00, 0 0 .2vw #7e4700, .5vw .5vw .1vw #40340A;
            color: #806914;
          }
        }
      `

      return style;
  }
}
customElements.define("card-news-left", CardnewsLeft)
customElements.define("card-news", Cardnews)
