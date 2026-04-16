import { ActionStateWithReducer } from 'features/react19Examples/ActionStateWithReducer';
import './App.css'
import { FormWithAsyncSave } from 'features/react19Examples/FormWithAsyncSave';
import { TodoListOptimistic } from 'features/react19Examples/TodoListOptimistic';

function App() {
  return (
    <>
      <h2>FormWithAsyncSave</h2>
      <FormWithAsyncSave />
      <hr />
      <h2>TodoListOptimistic</h2>
      <TodoListOptimistic />
      <hr />
      <h2>ActionStateWithReducer</h2>
      <ActionStateWithReducer />
      <hr />

      {/* <TooltipTest /> */}

      {/* <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
      <FormPage /> */}
    </>
  );
}

export default App
