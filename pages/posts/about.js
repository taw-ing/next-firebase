import Layout from '../../components/layout'
import {Row, Col} from 'react-bootstrap-v5'

const About = () => (
  <Layout>
    <h1>About</h1>
    <Row>
    <Col>
        <p className="mb-2">Ano ang batayan mo sa iyong argumento? (<i>Char</i>) Ang site na ito ay ginawa "for the good of the society" kunuhay. Bitaw, wala na talaga akong maisip na website kung san pwede akong magkapera. Kaya <a href="/">Buy me a coffee</a> na. </p>
    </Col>
    </Row>
    <h2>Licenses</h2>
    <Row>
    <Col>
    <p>The site logo was designed by <a href="https://openmoji.org">OpenMoji </a> – the open-source emoji and icon project. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. The logo's original color was modified from yellow to purple.</p>
    </Col>
    </Row>
  </Layout>
)

export default About
