export function Rubric({list}) {
  return (
    <div>
<ol className="list-disc">
{list.map(i => (<li key={i}>{i}</li>))}
</ol>
    </div>
  )
}

  
