import Image from "next/image"
import {
  Container,
  Flex,
  Group,
  Space,
  Stack,
  Text,
  Title
} from "@mantine/core"

import useStyles from "./Projects.styles"
import urugaru from "@/assets/urugaru_thumb.png"
import orso from "@/assets/orsoferr_thumb.png"
import {
  IconBrandAmazon,
  IconBrandCss3,
  IconBrandNextjs,
  IconBrandPlanetscale,
  IconBrandPrisma,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel
} from "@tabler/icons-react"

const Projects = () => {
  const { classes } = useStyles()
  return (
    <section className={classes.root} id="projects">
      <Container>
        <Stack spacing={45}>
          <Title className={classes.title}>
            <span className={classes.span}>&lt;</span>
            Projetos
            <span className={classes.span}>&gt;</span>
          </Title>
          <Flex className={classes.card}>
            <div className={classes.imageWrapper}>
              <Image className={classes.image} fill src={urugaru} alt="" />
            </div>
            <Flex className={classes.info}>
              <Title>uruGaru</Title>
              <Space h="md" />
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem saepe quibusdam recusandae molestiae vel, itaque in
                eos? Quis obcaecati, neque nobis at quisquam ipsum quibusdam
                accusantium, aspernatur placeat laudantium sequi.
              </Text>
              <Space h="md" />
              <Group position="center">
                <IconBrandNextjs
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandTypescript
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandCss3
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandPrisma
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandPlanetscale
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandAmazon
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandStripe
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandVercel
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
              </Group>
              <Space h="md" />
              <Group position="center">
                <a
                  href="https://urugaru.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <Title size="h3">Site</Title>
                </a>
                <a
                  href="https://github.com/genesonio/urugaru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <Title size="h3">Github</Title>
                </a>
              </Group>
            </Flex>
          </Flex>
          <Flex className={classes.card}>
            <div className={classes.imageWrapper}>
              <Image className={classes.image} fill src={orso} alt="" />
            </div>
            <Flex className={classes.info}>
              <Title>Orso Ferramentas</Title>
              <Space h="md" />
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem saepe quibusdam recusandae molestiae vel, itaque in
                eos? Quis obcaecati, neque nobis at quisquam ipsum quibusdam
                accusantium, aspernatur placeat laudantium sequi.
              </Text>
              <Space h="md" />
              <Group position="center">
                <IconBrandNextjs
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandTypescript
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandTailwind
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandPlanetscale
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandPrisma
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
                <IconBrandVercel
                  color="#E4F0FB"
                  size={36}
                  stroke={1.2}
                  onMouseEnter={e => (e.currentTarget.style.stroke = "#ADD7FF")}
                  onMouseLeave={e => (e.currentTarget.style.stroke = "#E4F0FB")}
                />
              </Group>
              <Space h="md" />
              <Group position="center">
                <a
                  href="https://orsoferramentas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <Title size="h3">Site</Title>
                </a>
                <a
                  href="https://github.com/genesonio/orso-ferramentas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <Title size="h3">Github</Title>
                </a>
              </Group>
            </Flex>
          </Flex>
          <Title className={classes.title}>
            <span className={classes.span}>&lt;/</span>
            Projetos
            <span className={classes.span}>&gt;</span>
          </Title>
        </Stack>
      </Container>
    </section>
  )
}

export default Projects
