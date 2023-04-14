import { createStyles, rem } from "@mantine/core"

export const HEADER_HEIGHT: string = rem(80)

const useStyles = createStyles(theme => ({
  root: {
    position: "relative",
    height: "90vh",
    paddingTop: rem(24),
    [theme.fn.smallerThan("md")]: {
      height: "min-content"
    }
  },
  container: {
    height: "100%"
  },
  grid: {
    height: "100%",
    width: "100%",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column-reverse",
      margin: 0
    }
  },
  col: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    [theme.fn.smallerThan("md")]: {
      minHeight: "fit-content",
      margin: "auto",
      minWidth: "fit-content"
    }
  },
  text: {
    color: theme.colors.dark[3],
    fontSize: rem(26),
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(18)
    }
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "70%",
    [theme.fn.smallerThan("md")]: {
      width: "60%",
      height: "50%",
      margin: "auto"
    },
    [theme.fn.smallerThan("sm")]: {
      width: "90vw",
      height: "50vh",
      margin: "auto"
    }
  },
  image: {
    objectFit: "contain"
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    height: rem(35),
    maxWidth: "85vw"
  }
}))

export default useStyles
