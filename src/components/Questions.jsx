
import React from 'react';
import { Link } from 'react-router-dom';
import faqs from '../data';

const Questions = () => {
  return (
    <div className='main'>
      <h1 align="center">Вопросы</h1>
      <ul>
        {faqs.map(faq => (
          <li key={faq.id}>
            <Link to={`/answer/${faq.id}`}><button className='but'>{faq.question}</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;