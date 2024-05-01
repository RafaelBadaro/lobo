
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="bg-gradient-to-b from-indigo-800 to-blue-950 min-h-full">
      <Outlet />
    </div>
  );
}

export default App;
