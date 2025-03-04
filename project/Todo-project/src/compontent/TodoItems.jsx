import Row2 from "./row2";

const TodoItems = ({ tooItems }) => {
  return (
    <>
      {tooItems.map((item) => (
        <Row2 
          date={item.date} 
          name={item.name} 
        />
      ))}
    </>
  );
};

export default TodoItems;
