import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <span>
    <img src="/pl-logo.png" alt="PL" className="w-8 h-8" />
  </span>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/ULL-ESIT-PL/pl2223apuntes-nextra'
  },
  docsRepositoryBase: 'https://github.com/ULL-ESIT-PL/pl2223apuntes-nextra/tree/main',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  logo,
  head: () => {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        
        <link rel="icon" href="/favicon.png" type="image/png" />

      </>
    )
  },
   banner: {
     key: 'intro-to-pl',
     text: (
         <a href="/temas/introduccion-a-pl/presentacion" rel="noreferrer">
           🎉 2nd term starting at 2023-01-30 →
         </a>
       )
     },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: () => <>Question? Give us feedback →</>,
    labels: 'feedback'
  },
  /*
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 0
  },
  */
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'About') {
        return <>❓ {title}</>
      }
      return <>👉 {title}</>
    }
  },
  footer: {
    text: () => {
      return (
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>
            <a
              className="flex items-center gap-1 text-current"
              target="_blank"
              rel="noopener noreferrer"
              title="vercel.com homepage"
              href="https://vercel.com?utm_source=nextra.site"
            >
            </a>
          </div>
          <p className="mt-6 text-xs">© 2022 Casiano Rodríguez León.</p>
        </div>
      )
    }
  },
  toc: {
    title: 'On this page',
    float: true,
  },
  chat: {
    link: "https://mail.google.com/chat/u/1/#chat/welcome",
    //icon: "Chat",
  }
}

export default config
