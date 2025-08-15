const fs = require('fs');
const path = require('path');

class HeaderComponent {
    constructor() {
        this.headerString = '';
        this.loadString();
    }

    loadString() {
        const jsonPath = path.join(__dirname, '../../../assets/data/strings.json');
        const data = fs.readFileSync(jsonPath);
        const strings = JSON.parse(data);
        this.headerString = strings.headerText;
    }

    render() {
        console.log(this.headerString);
    }
}

module.exports = HeaderComponent;