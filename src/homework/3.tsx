import { useState, ChangeEvent } from 'react';

// # Завдання 3

// Ви створюєте компонент форми у React. Ви маєте поле введення, в якому ви хочете відстежити зміни. Для цього ви використовуєте обробник подій onChange. Ваше завдання – правильно типізувати подію, яка передається у цю функцію.

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
