import { createStyles, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  tech: {
    color: theme.colors.dark[0],
    alignItems: "center"
  },
  info: {
    fontSize: rem(12)
  }
}))

export default useStyles
