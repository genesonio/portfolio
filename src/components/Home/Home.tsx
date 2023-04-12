import Image from "next/image"

import { Container, Grid, Space, Text } from "@mantine/core"

import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandMantine,
  IconBrandPrisma,
  IconBrandGithub,
  IconBrandGit,
  IconBrandVercel,
  IconMinusVertical,
  IconBrandLinkedin
} from "@tabler/icons-react"

import useStyles from "./Home.styles"

import octocat from "@/assets/octocat.gif"

const Home = () => {
  const { classes } = useStyles()

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid className={classes.grid}>
          <Grid.Col className={classes.col} span={6}>
            <Text className={classes.text}>
              Olá! Sou Genésio da Silva Pacheco.
              <br />
              Seu programador front-end apaixonado por criar soluções inovadoras
              e úteis!
              <br />
              Seja bem-vindo ao meu mundo!
            </Text>
            <Space h="xl" />
            <div className={classes.icons}>
              <a
                href="http://www.linkedin.com/in/genesonio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin color="#C1C2C5" size={36} stroke={1.2} />
              </a>
              <a
                href="http://github.com/genesonio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub color="#C1C2C5" size={36} stroke={1.2} />
              </a>

              <IconMinusVertical color="#C1C2C5" size={36} stroke={1.2} />

              <IconBrandTypescript color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandNextjs color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandReact color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandMantine color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandPrisma color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandTailwind color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandGit color="#C1C2C5" size={36} stroke={1.2} />
              <IconBrandVercel color="#C1C2C5" size={36} stroke={1.2} />
            </div>
          </Grid.Col>
          <Grid.Col className={classes.col} span={6}>
            <div className={classes.imageWrapper}>
              <Image fill className={classes.image} src={octocat} alt="" />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

export default Home
