// code for stockPredictor.js
/* JavaScript code for Stock Predictor application */
import Openai from 'openai';
import fs from 'fs/promises';

const API_KEY = await loadApiKey(); // Load your OpenAI API key from a secure location
const openai = new Openai({ apiKey: API_KEY });

async function loadApiKey() {
  try {
    const cwd = process.cwd();
    const CONFIG_PATH = path.join(cwd, 'apiKey.json');

const data = await fs.readFile(CONFIG_PATH, 'utf-8');
const config = JSON.parse(data);
return config.openai.apiKey;
  } catch (error) {
    console.error('Error reading API key from file:', error);
    return null;
  }
}

async function getStockPrediction(stockSymbol) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a stock market prediction assistant.' },
        { role: 'user', content: `Predict the stock price for ${stockSymbol} for the next week.` }
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching stock prediction:', error);
    return 'Error fetching prediction.';
  }
}

// Example usage
getStockPrediction('AAPL').then(prediction => {
  console.log('Stock Prediction for AAPL:', prediction);
});