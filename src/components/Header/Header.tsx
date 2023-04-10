import { useState } from "react"

import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Transition
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import useStyles, { HEADER_HEIGHT } from "./Header.styles"

interface HeaderResponsiveProps {
  links: { link: string; label: string }[]
}

const HeaderResponsive = ({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false)
  const [active, setActive] = useState(links[0]?.label)
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.label
      })}
      onClick={event => {
        event.preventDefault()
        setActive(link.label)
        close()
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <h1 className={classes.logo}>
          <span className={classes.logoSpan}>&lt;</span>Genésio
          <span className={classes.logoSpan}> /&gt;</span>
        </h1>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          color="#909296"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default HeaderResponsive
