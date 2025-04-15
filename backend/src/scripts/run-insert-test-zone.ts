import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runInsertTestZone() {
    try {
        // Compile and run the TypeScript file
        await execAsync('npx ts-node src/scripts/insert-test-zone.ts');
        console.log('Test zone insertion completed successfully');
    } catch (error) {
        console.error('Error running test zone insertion:', error);
    }
}

runInsertTestZone(); 