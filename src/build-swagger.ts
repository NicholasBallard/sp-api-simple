import { promises as fs } from 'fs';
import SwaggerCombine from 'swagger-combine';

(async function() {
    const x: string = JSON.stringify((await SwaggerCombine('./swagger-combine.json')));
    await fs.writeFile('./src/sp-api-swagger.json', x);
})();
