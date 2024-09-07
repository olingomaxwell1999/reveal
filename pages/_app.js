import '../styles/globals.css'

import Head from 'next/head'

import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp ({Component, pageProps}) {

  return (
    <>
      <Head>
        
      </Head>
      <Layout>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-WEDLPBY9W2'/>

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEDLPBY9W2', {
              page_path: window.location.pathname
            })
          `}
        </Script>
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/25735940.js"
        />
        {/* End of HubSpot Embed Code */}
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp