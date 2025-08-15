const fs = require('fs');
const path = require('path');

class StringService {
    getString(key) {
        const dataPath = path.join(__dirname, '../../assets/data/strings.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data[key];
    }
}

module.exports = new StringService();