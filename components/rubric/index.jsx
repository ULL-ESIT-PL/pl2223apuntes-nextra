export function Rubric({list}) {
  return (
    <div>
<ol className="list-none">
{list.map(i => (<li key={i}> <input type="checkbox" /> {i}</li>))}
</ol>
    </div>
  )
}

  
