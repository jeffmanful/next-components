/**
 * Entry point for the app.
 * Each file in the pages diretory is a route in the app.
 * e.g index.js = '/',  http://localhost:3000/,
 * about.js = http://localhost:3000/about/
 */
import { Button } from 'reactstrap'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const index = () => {
  return (
    <Layout>
        <h1>.YO</h1>
        <Button color="danger">Danger!</Button>
    </Layout>
  )
}

export default index;
