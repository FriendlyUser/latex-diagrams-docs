import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Latex Diagrams</span>,
  project: {
    link: 'https://github.com/FriendlyUser/LatexDiagrams',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/FriendlyUser/LatexDiagrams',
  footer: {
    text: 'Latex Diagrams',
  },
  editLink: {
    component({children, className, filePath}) {
      // adjusted filePath
      let adjustedFilePath = filePath
      if (!filePath.includes("/index")) {
        // need another adjustment for index.mdx or empty / ControlSystems/CSI/
        // get all slashes split
        const prePageSplit = adjustedFilePath.split("pages")[1].replace("pages/", "")
        // remove content after last slash
        const prePage = prePageSplit.substring(0, prePageSplit.lastIndexOf("/"))
        // remove prePage each value in slash and replace with empty slash
        // remove leading slash
        console.log(prePage)
        // remove first character
        const newPrePage = prePage.substring(1)
        // 
        for (let i = 0; i < newPrePage.split("/").length; i++) {
          adjustedFilePath = adjustedFilePath.replace(newPrePage.split("/")[i], "#")
          // remove #/
          adjustedFilePath = adjustedFilePath.replace("#/", "")

        }
        console.log(adjustedFilePath)
        adjustedFilePath = adjustedFilePath.replace(newPrePage, "").replace("pages", `/blob/master/${newPrePage}`).replace(".mdx", ".tex")
        console.log(adjustedFilePath)
      } 
      return (<a className={className} href={adjustedFilePath}>{children} → </a>)
    }
  }
}

export default config
