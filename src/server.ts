import './loadEnvironment.js';
import express from 'express';

// Iniciem express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
const alumnes:string [] = [
  "Roger Bustos",
  "Nicolas Vehi",
  "Oriol Romeu",
  "Saten Azekistan",
  "Santiago Presidente",
  "Oscar Krugger",
  "Nil Ojeda",
  "Juan Cookies",
  "Ivan Alejo",
  "Mateo Acha",
  "Paul Aznar",
  "Adria Lozano",
  "Adria Baltron",
  "Joshua Abril",
  "Denis Povodei",
  "Pol Cubo",
  "Atrnau Gil",
  "Marcos Riviere",
  "Roger Arnan",
  "Jan Tost"
];
const totsAlumnes:number = alumnes.length;
const introMsn:string = "Illo que pongas al final del link dos cosas:<br> /ping o la otra opcion es <br> /alumnes";

// Creem l'array que ens servira per als alumnes
const alumneARRAY : object = alumnes.map(persona => {
  const [nom,cognom] = persona.split(" "); // Mostrem nom cognom
  return { nom, cognom };
});

app.get('/', (req, res) => {
  res.send(introMsn);
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/alumnes', (req, res) => {
  res.json({
    alumnes:alumneARRAY,
    totalAlumnes:totsAlumnes
  })

});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


export default app;