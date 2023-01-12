import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  console.log("router.query")
  console.log(router.query)

  const query = router.query
  const { pid } = router.query

  return <div>
    <h1>Processed by pages/post/[pid].js</h1>
    <ul>
      <li>Post: {pid}</li>
      <li>Pathname: {router.pathname}</li>
      <li>Query: 
        <ul>
          {Object.entries(query).map(([key, value]) => {
            return <li key={key}>{key}: {value}</li>
          })}
        </ul>
      </li>
      <li><Link href="/">Home</Link></li>
    </ul>
  </div>
}

export default Post
