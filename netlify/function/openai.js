// netlify/functions/openai.js
const axios = require('axios');

exports.handler = async function (event, context) {
  const { input } = JSON.parse(event.body); // Prende l'input dal body della richiesta

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",
        prompt: input,
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Usa la chiave API dalle variabili d'ambiente
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.data.choices[0].text }),
    };
  } catch (error) {
    console.error("Errore API OpenAI", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Errore durante la chiamata API' }),
    };
  }
};
