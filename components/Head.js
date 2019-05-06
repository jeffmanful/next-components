/**
 * Returns the head part of the HTML doc
 * Load any fonts or external stylesheets here as you would with html.
 */
import Head from 'next/head';

export default () => {
  return (
    <Head>
      <title>Site title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
    </Head>
  )
}