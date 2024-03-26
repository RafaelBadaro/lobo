
function Card(props) {
  return (
    <>
      <div class="p-6 max-w-sm mx-auto bg-indigo-600 rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="w-12" src={props.img} alt="Role-Image" />
        </div>
        <div>
          <div class="text-xl font-medium text-white">{props.roleName}</div>
          <p class="text-slate-500 text-white">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;

