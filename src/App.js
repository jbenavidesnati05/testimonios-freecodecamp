import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';
import'./hojas-de-estilo/Testimonio.css';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp :</h1>
   
         <Testimonio
         nombre='Emma Bostian'
         pais='Suecia'
         imagen='emma'
         cargo='Ingeniero de Software'
         empresa='Spotify'
         testimonio='ve always struggled with learning JavaScript. I ve taken many courses but freeCodeCamp s 
         course was the one which stuck. Studying JavaScript as well as data structures and algorithms on 
         freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify'
         />
         <Testimonio
          nombre='Shwan Wuan'
          pais='Singapor'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Its scary to change careers. I only gained confidence that I could co
          de by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life'
         
         
         />
            <Testimonio
          nombre='Shwan Wuan'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de Software'
          empresa='Chat desk '
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
         
         />
      </div>
    </div>
  );
}

export default App;
