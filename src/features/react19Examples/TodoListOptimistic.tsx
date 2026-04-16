import { useOptimistic } from "react";

const todos = [
  {
    text: "Купить хлеб",
  },
  {
    text: "Купить масло",
  },
  {
    text: "Купить молоко",
  },
];

export const TodoListOptimistic = () => {
 const [optimisticTodos, addTodo] = useOptimistic(
   todos,
   (prev, newTodo) => [...prev, newTodo as { text: string }]
 );

 async function handleAdd(formData: FormData) {
   const newTodo = { text: formData.get("text") };
   addTodo(newTodo); // показываем сразу

   // Имитация отправки:
   await new Promise(resolve => setTimeout(resolve, 1000));
 }

  return (
    <>
      <form action={handleAdd}>
        <input name="text" />
        <button>Добавить</button>
      </form>

      <ul>
        {optimisticTodos.map((todo, i) => (
          <li key={i}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};
