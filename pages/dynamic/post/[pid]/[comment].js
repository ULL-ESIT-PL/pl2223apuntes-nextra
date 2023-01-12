import Link from 'next/link'
import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  console.log(router.query)
  const { pid, comment } = router.query

  return <div>
    <h1>Processed by pages/post/[pid]/[comment].js</h1>
    <ul>
    <li>pid: {pid}</li>
    <li>comment: {comment}</li>
    <li>Query:
      <ul>
        {Object.entries(router.query).map(([key, value]) => {
          return <li key={key}>{key}: {value}</li>
        })}
      </ul>
    </li>
    <li><Link href="/">Home</Link></li>
  </ul>
    </div>
}

export default Comment
