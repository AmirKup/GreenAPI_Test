import GreenAPI from '../src/GreenAPI'; // Путь к вашему файлу GreenAPI.ts

describe('Тесты для GreenAPI', () => {
  test('должен успешно отправить сообщение', async () => {
    console.log('Запуск теста отправки сообщения');
    const response = await GreenAPI.sendMessage({
      chatId: '77064120981@c.us',
      message: 'Привет, мир!',
    });

    console.log('Ответ от сервера:', response); // Лог после получения ответа
    expect(response.statusCode).toBe(200); // Проверка успешного ответа
    expect(response.data.message).toBe('Сообщение отправлено'); // Проверка, что сообщение отправлено
  });

  test('должен вернуть историю чатов', async () => {
    console.log('Запуск теста на получение истории чатов');
    const response = await GreenAPI.getChatHistory(10);
    console.log('Ответ от сервера:', response); // Лог после получения ответа
    expect(response.statusCode).toBe(200); // Проверка успешного ответа
    expect(Array.isArray(response.data)).toBe(true); // Проверка, что данные — это массив
  });

  test('должен проверить статус инстанса', async () => {
    console.log('Запуск теста на проверку статуса инстанса');
    const response = await GreenAPI.getStateInstance();
    console.log('Ответ от сервера:', response); // Лог после получения ответа
    expect(response.statusCode).toBe(200); // Проверка успешного ответа
    expect(response.data.state).toBe('authorized'); // Проверка, что инстанс авторизован
  });
});
