import { ActionIcon, Container, Group } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import useStyles from "./Footer.style"

const Footer = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h1 className={classes.logo}>
          <span className={classes.span}>&lt;</span>Genésio
          <span className={classes.span}> /&gt;</span>
        </h1>
        <Group noWrap>
          <ActionIcon>
            <a
              href="https://github.com/genesonio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub color="#91B4D5" size={28} stroke={1.2} />
            </a>
          </ActionIcon>
          <ActionIcon>
            <a
              href="https://www.linkedin.com/in/genesonio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin color="#91B4D5" size={28} stroke={1.2} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}

export default Footer
