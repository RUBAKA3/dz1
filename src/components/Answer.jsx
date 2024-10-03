// src/components/Answer.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import faqs from '../data';

const Answer = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Инициализируем хук useNavigate
  const faq = faqs.find(faq => faq.id === parseInt(id));

  if (!faq) {
    return <h2>Вопрос не найден</h2>;
  }

  return (
    <div className='main'>
      <h1 align="center">{faq.question}</h1>
      <p align="center">{faq.answer}</p>
      <button onClick={() => navigate(-1)}>Назад</button> {/* Кнопка для возврата */}
    </div>
  );
};

export default Answer;
