import { Container, Flex, Stack, Title, Text } from "@mantine/core"
import Image from "next/image"

import useStyles from "./About.style"
import me from "@/assets/me.jpg"

const About = () => {
  const { classes } = useStyles()
  return (
    <section id="about" className={classes.root}>
      <Container>
        <Title className={classes.title}>
          <span className={classes.span}>&lt;</span>
          Sobre
        </Title>
        <Stack spacing="xl">
          <Flex className={classes.properties}>
            <Title size="h2">Imagem</Title>
            <div className={classes.wrapper}>
              <Image fill className={classes.image} src={me} alt="" />
            </div>
          </Flex>
          <Flex className={classes.properties}>
            <Title size="h2">Nome</Title>
            <Title size="h3">&quot;Genésio Da Silva Pacheco&quot;</Title>
          </Flex>
          <Flex className={classes.properties}>
            <Title sx={{ alignSelf: "start" }} size="h2">
              Sobre
            </Title>
            <Text fz="large" fw={500}>
              &quot;Sou apaixonado por tecnologia desde criança. Acredito que
              esse fascínio vem do interesse pela ciência e de uma busca
              incansável para entender o mundo ao nosso redor. Sempre tive uma
              mente criativa e adoro colocá-la em prática, seja criando novas
              soluções tecnológicos ou explorando RPGs de mesa e sobrevivência.
              Além disso, sou um grande fã de música e procuro estar sempre
              atualizado com as últimas novidades e tendências do mundo da
              tecnologia.&quot;
            </Text>
          </Flex>
        </Stack>
        <Title className={classes.title}>
          <span className={classes.span}>&lt;/</span>
          Sobre
          <span className={classes.span}>&gt;</span>
        </Title>
      </Container>
    </section>
  )
}

export default About
