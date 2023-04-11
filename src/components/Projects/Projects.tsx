import Image from "next/image"
import {
  Container,
  Flex,
  Group,
  Paper,
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
  IconBrandGithub,
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
      <Container className={classes.container}>
        <Stack spacing={45}>
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
                <IconBrandNextjs color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandTypescript color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandCss3 color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandPrisma color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandPlanetscale color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandAmazon color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandStripe color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandVercel color="#C1C2C5" size={36} stroke={1.2} />
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
                <IconBrandNextjs color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandTypescript color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandTailwind color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandPlanetscale color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandPrisma color="#C1C2C5" size={36} stroke={1.2} />
                <IconBrandVercel color="#C1C2C5" size={36} stroke={1.2} />
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
        </Stack>
      </Container>
    </section>
  )
}

export default Projects
