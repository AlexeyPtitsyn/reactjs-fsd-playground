import PreviousInput from 'features/PreviousInput'
import './App.css'
import ClickTimer from 'features/ClickTimer'
import FocusTracker from 'features/FocusTracker'
import DebouncedLogger from 'features/DebouncedLogger'
import WebSocketLogger from 'features/WebSocketLogger'
import FormPage from 'pages/Form'

function App() {

  return (
    <>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
      <FormPage />
    </>
  );
}

export default App
