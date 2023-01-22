import Link from 'next/link'

export default function CLink({href, children}) {
  let suffix = ""
  let target = "_self"
  if (/^https?:\/\//.test(href) === true) {
    suffix = "↗"
    target="_blank"
  }
  return (
  <Link 
    href={href} 
    target={target}
    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{children}{suffix}</Link>
  )
}