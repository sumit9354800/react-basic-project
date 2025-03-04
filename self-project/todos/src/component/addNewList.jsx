import AddList from "./addList";

function AddNewList({ todoList , onDelete}) {


    return (
        <>
            {todoList.map((item) => (
                <AddList key={item.name} list={item.name} date={item.date} onDelete={onDelete} />
            ))}
        </>
    )

}

export default AddNewList;