import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Description, Footer, Main, Title } from './utils'
import Grid from 'src/components/Grid'
import Card from 'src/components/Card'
import { setAppMountedTime } from 'src/store/actions/app'

const Home = () => {
  const dispatch = useDispatch()
  const { mountedTime } = useSelector(state => state.app)

  useEffect(() => {
    dispatch(setAppMountedTime(Date.now()))
  }, [])

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <Title>
          Welcome to <a href='https://nextjs.org'>Next.js!!</a>
        </Title>

        <Description>
          Get started by editing <code>pages/index.js</code>
          <br />
          Mounted on <code>{mountedTime}</code>
        </Description>

        <Grid>
          <Card
            link='https://nextjs.org/docs'
            title='Documentation'
            description='Find in-depth information about Next.js features and API.'
          />
          <Card
            link='https://nextjs.org/learn'
            title='Learn'
            description='Learn about Next.js in an interactive course with quizzes!'
          />
          <Card
            link='https://github.com/vercel/next.js/tree/master/examples'
            title='Examples'
            description='Discover and deploy boilerplate example Next.js projects.'
          />
          <Card
            link='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            title='Deploy'
            description='Instantly deploy your Next.js site to a public URL with Vercel.'
          />
        </Grid>
      </Main>

      <Footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
        </a>
      </Footer>
    </Container>
  )
}

export default Home
