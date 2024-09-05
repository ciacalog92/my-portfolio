const axios = require('axios');

exports.handler = async function (event, context) {
  console.log('Chiave API:', process.env.OPENAI_API_KEY);

  let input;
  try {
    const body = JSON.parse(event.body);
    input = body.input;
  } catch (error) {
    console.error('Errore nel parsing del body:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Errore nel parsing del body' }),
    };
  }

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
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ text: response.data.choices[0].text }),
    };
  } catch (error) {
    console.error("Errore API OpenAI:", error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Errore durante la chiamata API' }),
    };
  }
};
