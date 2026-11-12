const path = require('path');
const express = require('express');
const ejs = require('ejs');

const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// O require explícito do EJS garante que ele entre no pacote publicado na Vercel.
app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Na Vercel a pasta public/ é servida direto pela CDN; esta linha vale para uso local.
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Não encontrado' });
});

// Local: sobe o servidor. Na Vercel: o app exportado abaixo é usado como função.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`TechList rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;
