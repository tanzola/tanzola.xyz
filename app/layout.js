import './page.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';

// export const metadata = {
//   charset: "utf-8",
//   themeColor: "#ededed",
//   viewport: "width=device-width, initial-scale=1",
//   title: 'Robert Tanzola',
//   description: 'Motion Graphics Designer'
// }

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ededed" />
        <meta name="description" content="Motion Graphics Designer"/>
        <title>Robert Tanzola</title>
      </head>
      <body>
        <div className={"flex-page"}>
          <div className={"page-wrapper"}>
            {/* <div className="guideline-right" /> */}
            {/* <div className="guideline-left" /> */}
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
