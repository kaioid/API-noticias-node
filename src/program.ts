import StartUp from './startUp';

const port = process.env.PORT || '3050';

StartUp.app.listen(port, function () {
  console.log(`servidor executando na porta ${port}`);
});
