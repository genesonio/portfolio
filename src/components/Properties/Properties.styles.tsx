import { createStyles, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  properties: {
    color: theme.colors.dark[3],
    alignItems: "center",

    [theme.fn.smallerThan("md")]: {
      alignItems: "start",
      flexDirection: "column"
    }
  },
  title: {
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(22),
      marginLeft: rem(-20)
    }
  }
}))

export default useStyles
