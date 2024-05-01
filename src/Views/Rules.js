import { roles_to_show } from '../classes/Role';
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

function Rules() {
  const navigate = useNavigate()

  const backToHome = async () => {
    navigate("/")
  }

  return (
    <>
      <div class="p-3">
        <button class="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={backToHome}> Voltar </button>
        
        <ul className="list-none">
          {roles_to_show.map((player, index) => (
            <li key={index} class="m-5">
              <Card img={player.img} roleName={player.name} description={player.description} />
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default Rules;

