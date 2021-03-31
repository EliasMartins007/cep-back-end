const express = require('express');
const Correios = require('node-correios');
const correios = new Correios();
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());

app.listen(PORT, () => console.log(`servidor rodando na porta:${PORT}`));

// app.get('/', (req, res) => {
//   res.json({ message: 'OK' });
// });

// app.get('/', (req, res) => {
//   const data = req.query;
//   console.log(data);
// });

// app.get('/', (req, res) => {
//   const { tracking } = req.query; //funciona basico sem o CEP 31/03/2021
//   console.log(tracking);
// });

// correios   //fiz teste no back end funcionou 2021
//   .consultaCEP({ cep: '33925520' })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.get('/', (req, res) => {
  const { tracking } = req.query;
  // prettier-ignore
  correios.consultaCEP({ cep: tracking })
  .then(result =>{
    res.send(result)
    console.log(result);
  })
  .catch(error =>{
    console.log(error);
  });
});
//exemplo gomide
// function executeDivisionPromise() {
//   divisionPromise(12, 0)
//     .then(result => {
//       console.log(result);
//     })
//     .catch(errorMessage => {
//       console.log('Falha na divisão ' + errorMessage);
//     });
// }
