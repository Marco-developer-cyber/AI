const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post('/chat', async (req, res) => {
  try {
    const { message, image } = req.body;

    if (image) {
      const response = await axios.get(`https://api.trace.moe/search?url=${encodeURIComponent(image)}`);
      const anime = response.data.result[0];
      const animeTitle = anime?.anime || 'Неизвестное аниме';
      const episode = anime?.episode || 'неизвестный эпизод';
      const similarity = (anime?.similarity * 100).toFixed(2);
      return res.json({ reply: `🎬 Найдено: "${animeTitle}" (эпизод ${episode}, сходство ${similarity}%)` });
    }

    const response = await axios.post(
      'https://api.anthropic.com/v1/completions',
      {
        model: 'claude-3-opus',
        prompt: `Ты аниме-эксперт в киберпанк-стиле. Ответь на вопрос: ${message}`,
        max_tokens: 100,
      },
      {
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ reply: response.data.completion });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});