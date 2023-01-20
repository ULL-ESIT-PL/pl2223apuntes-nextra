import $var from '/pl'
const Fields = [
  ["campus_virtual", "PL en el Campus Virtual"],
  "participantes", 
  "calificador", 
  "tareas", 
  "foros"]
const LinkClass = "text-blue-500 hover:underline hover:text-blue-600" // tailwindcss
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CampusVirtual() {
  return (
  <ul className="list-disc">
    {Fields.map(i => 
      <li key={i}>
        <a 
           href={$var[i]} 
           className={LinkClass} 
           target="_blank">
            {Array.isArray(i)? i[1] : capitalizeFirstLetter(i)}
         </a>
      </li>
      )}
  </ul>
  )
}