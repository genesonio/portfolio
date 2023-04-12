import { Stack, Title } from "@mantine/core"
import { type ReactNode } from "react"
import useStyles from "./Tech.styles"

interface ITech {
  tech: string
  date: Date
  children: ReactNode
}

const Tech = ({ tech, date, children }: ITech) => {
  const exp = (from: Date): string => {
    const now: Date = new Date()
    const monthDiff: number = Math.ceil(
      (now.getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 30)
    )
    if (monthDiff >= 12) {
      const year = Math.floor(monthDiff / 12)
      return year == 1 ? `${year} ano` : `${year} anos`
    }
    return monthDiff == 1 ? `${monthDiff} mês` : `${monthDiff} meses`
  }

  const { classes } = useStyles()

  return (
    <Stack className={classes.tech} spacing="xs">
      {children}
      <Title className={classes.info} size="h3">
        {tech}
      </Title>
      <Title className={classes.info} size="h3">
        {exp(date)}
      </Title>
    </Stack>
  )
}

export default Tech
