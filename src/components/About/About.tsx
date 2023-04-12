import Image from "next/image"

import { Container, Stack, Title, Text, Group } from "@mantine/core"
import {
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript
} from "@tabler/icons-react"

import { Tech } from "@/components/Tech"

import useStyles from "./About.style"
import me from "@/assets/me.jpg"
import { Properties } from "../Properties"

const About = () => {
  const { classes } = useStyles()

  const idade = () => {
    const hoje = new Date()
    const idade = hoje.getFullYear() - 1998
    return hoje.getMonth() < 5 - 1 ||
      (hoje.getMonth() == 5 - 1 && hoje.getDate() < 28)
      ? idade - 1
      : idade
  }

  return (
    <section id="about" className={classes.root}>
      <Container>
        <Title className={classes.title}>
          <span className={classes.span}>&lt;</span>
          Sobre
        </Title>
        <Stack className={classes.indent} spacing="xl">
          <Properties title="Imagem">
            <div className={classes.wrapper}>
              <Image fill className={classes.image} src={me} alt="" />
            </div>
          </Properties>
          <Properties title="Nome">
            <Title size="h3">&quot;Genésio Da Silva Pacheco&quot;</Title>
          </Properties>
          <Properties title="Idade">
            <Title size="h3">&quot;{idade()} anos&quot;</Title>
          </Properties>
          <Properties title="Sobre">
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
          </Properties>
          <Properties title="Experiência">
            <Group>
              <Tech tech="JavaScript" date={new Date(2022, 3, 25)}>
                <IconBrandJavascript color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
              <Tech tech="ReactJS" date={new Date(2022, 4, 20)}>
                <IconBrandReact color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
              <Tech tech="TailwindCSS" date={new Date(2022, 4, 20)}>
                <IconBrandTailwind color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
              <Tech tech="TypeScript" date={new Date(2022, 5, 23)}>
                <IconBrandTypescript color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
              <Tech tech="NextJS" date={new Date(2022, 11, 23)}>
                <IconBrandNextjs color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
              <Tech tech="Mantine" date={new Date(2023, 1, 14)}>
                <IconBrandMantine color="#C1C2C5" size={36} stroke={1.2} />
              </Tech>
            </Group>
          </Properties>
        </Stack>
        <Title className={classes.title}>
          <span className={classes.span}>/&gt;</span>
        </Title>
      </Container>
    </section>
  )
}

export default About
