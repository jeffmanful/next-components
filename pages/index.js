/**
 * Entry point for the app. 
 * Each file in the pages diretory is a route in the app.
 * e.g index.js = '/',  http://localhost:3000/,  
 * about.js = http://localhost:3000/about/
 */
import Layout from '../components/Layout';

const index = () => {
  return (
    <Layout>
        <h1>.YO</h1>
    </Layout>
  )
}

export default index;
