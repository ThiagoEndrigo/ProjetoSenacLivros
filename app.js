import { startDB } from './src/db/database.js';
import app from './src/routes/routes.js';
startDB();
const port = 80;

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
