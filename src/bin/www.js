import log from 'console-emoji';
import app from '../config/app';

import { port } from '../config/conf';
import connectionDb from '../config/DB';

connectionDb().then(() => log('you conected suessfully :clap:', 'green'));

app.listen(port || 8080, () => log(`you running  on port ${port} :eyeglasses:`, 'green'));
