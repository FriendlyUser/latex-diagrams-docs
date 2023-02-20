import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Latex Diagrams</span>,
  project: {
    link: 'https://github.com/FriendlyUser/LatexDiagrams',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/FriendlyUser/LatexDiagrams',
  footer: {
    text: 'Latex Diagrams',
  },
  editLink: {
    component({children, className, filePath}) {
      // adjusted filePath
      const adjustedFilePath = filePath.replace("/pages", "/blob/master").replace(".mdx", ".tex")
      return (<a className=className href={adjustedFilePath}>{children}</a>)
    }
  }
}

export default config
