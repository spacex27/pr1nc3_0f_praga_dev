const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.MONGO_URI);

    if (mongoose.connection.readyState === 1) {
        console.log('Mongoose jest połączony!');
    } else {
        console.log('Brak aktywnego połączenia. Aktualny status:', mongoose.connection.readyState);
    }
}

main().catch(err => console.log(err));
