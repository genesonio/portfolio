import { Grid, Title } from "@mantine/core"

import { type ReactNode } from "react"

import useStyles from "./Properties.styles"

interface IProperties {
  title: string
  children: ReactNode
}

const Properties = ({ title, children }: IProperties) => {
  const { classes } = useStyles()

  return (
    <Grid className={classes.properties}>
      <Grid.Col span={5}>
        <Title className={classes.title} size="h2">
          {title}
        </Title>
      </Grid.Col>
      <Grid.Col span="auto">{children}</Grid.Col>
    </Grid>
  )
}

export default Properties
