import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import firebase from '../firebase'
import Layout from '../components/layout'
import {Badge, Card, Row, Col} from 'react-bootstrap-v5'
import FilterBtn from '../components/filterbtn'

export default function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [topics, setTopics] = useState([])

  const ref = firebase.firestore().collection('products')

  const filterByTopic = (topic) => {
    if(topic==='all'){
      setTopics([])
      return;
    }

    if(topics.includes(topic)){
      debugger
      const temp = [...topics]
      temp.splice(topics.indexOf(topic),1);
      setTopics(temp);
    } else {
      setTopics([...topics, topic])
    }
    
  }

  function getProducts() {
    setLoading(true)
    debugger
    const ref2 = topics.length > 0 ? ref.where('topic','in',topics): ref;
    ref2.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      });
      setProducts(items)
      setLoading(false)
    });
  }

  useEffect(()=>{
    getProducts()
  }, [topics])

//  if(loading) {
//    return <h1>Loading...</h1>
//  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row className="mb-2">
        <div arial-label="Filter by">
          <span>Filter: </span>
          <FilterBtn filterFunction={filterByTopic} topic='all' active={topics.length===0}>Show all</FilterBtn>
          <FilterBtn filterFunction={filterByTopic} topic='south-china-sea' active={topics.includes('south-china-sea')}>South China Sea</FilterBtn>
          <FilterBtn filterFunction={filterByTopic} topic='coa' active={topics.includes('coa')}>COA Audit</FilterBtn>
          <FilterBtn filterFunction={filterByTopic} topic='history' active={topics.includes('history')}>History</FilterBtn>
        </div>
      </Row>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description} </Card.Text>
              </Card.Body>
              {(product.topic)?
              <Card.Footer>
                <span className="badge bg-dark">{product?.topic}</span>
              </Card.Footer>
              : ' '}
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {loading?<p>Loading...</p>:<></>}
      </Row>
    </Layout>
  )
}
