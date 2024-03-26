import './App.css';
import Card from './components/Card'
import { roles } from './classes/Role'

function App() {
  const arrayDataItems = roles.map((role) => <li> <Card roleName={role.name} description={role.description} img={role.img} /></li>);
  return (
    <>
      <div class="bg-gradient-to-b from-indigo-800 to-blue-950 min-h-full">
        <ul class="list-none">{arrayDataItems}</ul>
      </div>
    </>
  );
}

export default App;

