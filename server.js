const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Function to find the first unique character in a string
function uniqueChar(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

app.post('/first-unique-character', (req, res) => {
    const { text_to_process } = req.body;

    if (typeof text_to_process !== 'string') {
        return res.status(400).json({
            error: "Invalid input. 'text_to_process' should be a string."
        });
    }

    const index = uniqueChar(text_to_process);
    const result = {
        first_unique_char: index !== -1 ? text_to_process[index] : null,
        first_unique_char_index: index,
        timestamp: new Date().toISOString()
    };

    console.log(`[${result.timestamp}] Endpoint /first-unique-character called with input: "${text_to_process}"`);

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
