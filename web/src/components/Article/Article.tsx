import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  const { id, title, body, createdAt } = article

  return (
    <article key={id}>
      <header>
        <h2>
          <Link to={routes.article({ id })}>{title}</Link>
        </h2>
      </header>
      <p>{body}</p>
      <div>Posted at: {createdAt}</div>
    </article>
  )
}

export default Article
