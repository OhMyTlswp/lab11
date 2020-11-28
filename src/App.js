import React from 'react';
import './App.scss';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="app">
      <Table
        name="Пользователи"
        onChangeData={(data) => {
          console.log(data);
        }}
        headers={{
          name: {
            name: 'Имя',
            type: 'text',
            defaultValue: 'Имя не задано',
          },
          email: {
            name: 'Email',
            type: 'email',
            defaultValue: 'Email не задан',
          },
          rights: {
            name: 'Права',
            type: 'dropdown',
            defaultValue: 'Права не заданы',
            dropdownItems: ['Админ', 'Пользователь'],
          },
          status: {
            name: 'Статус',
            type: 'dropdown',
            defaultValue: 'Статус не задан',
            dropdownItems: ['Активный', 'Не активный', 'Забаненый'],
          },
        }}
        data={[
          {
            name: 'Александр',
            email: 'emailmail',
            rights: 'админ',
            status: 'Активный',
          },
          {
            name: 'Александр',
            email: 'emailmail',
            rights: 'админ',
            status: 'Активный',
          },
        ]}
      />
    </div>
  );
}

export default App;
