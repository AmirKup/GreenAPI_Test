import axios from 'axios';

const instanceId = '7105248913';
const apiToken = '6a13c180f7234458a50489e9a39888bd578e0c2c09554d4f90';
const apiUrl = `https://7105.api.greenapi.com/waInstance${instanceId}`;
const chatId = '77064120981@c.us';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

async function getStateInstance() {
  try {
    const response = await axios.get(
      `${apiUrl}/getStateInstance/${apiToken}`,
      config
    );
    return response.data.stateInstance;
  } catch (error) {
    console.error('Ошибка при получении статуса инстанса:', error);
    throw error;
  }
}

async function sendMessage({ chatId, message }: { chatId: string, message: string }) {
  try {
    const response = await axios.post(
      `${apiUrl}/sendMessage/${apiToken}`,
      {
        chatId,
        message,
      },
      config
    );
    return response.data; // Ответ от API
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    throw error;
  }
}

async function getChatHistory(count: number = 10) {
  try {
    const response = await axios.post(
      `${apiUrl}/getChatHistory/${apiToken}`,
      {
        chatId,
        count,
      },
      config
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении истории чатов:', error);
    throw error;
  }
}

// Экспорт функций для использования в других файлах
export default {
  sendMessage,
  getChatHistory,
  getStateInstance,
};
