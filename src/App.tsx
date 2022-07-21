import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fredcsouza.png",
      name: "Frederico Campos",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-11 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Sênior Web Dev & Instructor"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: 'Acesse e deixe seu feedback' }
    ],
    publishedAt: new Date('2022-07-11 14:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego",
      role: "CTO Rocketseat"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Bora codar!!! 🚀' }
    ],
    publishedAt: new Date('2022-07-11 14:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
