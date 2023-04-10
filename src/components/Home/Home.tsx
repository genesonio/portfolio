import Image from "next/image"

import { Container, Grid } from "@mantine/core"

import useStyles from "./Home.styles"

const Home = () => {
  const { classes } = useStyles()

  return (
    <section id="home" className={classes.root}>
      <Container className={classes.container}>
        <Grid className={classes.grid}>
          <Grid.Col className={classes.col} span={6}>
            <p className={classes.text}>
              Olá! Sou Genésio da Silva Pacheco
              <br />
              Seu programador front-end apaixonado por criar soluções inovadoras
              e úteis!
              <br /> Seja bem-vindo ao meu portfólio!
            </p>
          </Grid.Col>
          <Grid.Col className={classes.col} span={6}>
            <div className={classes.imageWrapper}>
              <Image fill className={classes.image} src="/octocat.gif" alt="" />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

export default Home
