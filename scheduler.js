const cron = require('node-cron');
const { exec } = require('child_process');

// Define la tarea programada para ejecutar 'npm start' cada hora
cron.schedule('0 * * * *', () => {
  console.log('Ejecutando npm start...');
  const child = exec('npm start', {
    cwd: './' // Especifica el directorio de trabajo (ruta a tu proyecto)
  });

  child.stdout.on('data', (data) => {
    console.log(`Salida: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`npm start terminado con código de salida ${code}`);
  });
});
