import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/card';
import ExpeenseFilter from './ExpenseFilter';
import ExpenseForm from '../NewExpense/ExpenseForm';

const ExpenseList = ({ items }) => {
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  // 자식 컴포넌트에 ExpenseFilter에 있는 선택 연도를 끌어올리는 콜백함수
  const aa = (ee) => {
    console.log(ee);
    setFilteredYear(ee);
  };
  // ExpenseItem을 동적 렌더링하기
  // const iterateExpenseItem = () => {
  //   return;
  // };

  const filteredItmes = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // 조건부 랜더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filteredItmes.length > 0) {
    expenseContent = filteredItmes.map(({ id, title, price, date }) => (
      <ExpenseItem
        key={id}
        title={title}
        price={price}
        date={date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpeenseFilter
        selected={filteredYear}
        ee={aa}
      />
      {expenseContent}
    </Card>
  );
};
export default ExpenseList;
