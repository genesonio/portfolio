import { createStyles, rem } from "@mantine/core"

export const HEADER_HEIGHT: string = rem(60)

const useStyles = createStyles(theme => ({
  root: {
    position: "relative",
    height: "90vh"
  },
  container: {
    height: "100%"
  },
  grid: {
    height: "100%"
  },
  col: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  text: {
    color: theme.colors.dark[3],
    fontSize: rem(25),
    textAlign: "center"
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "70%"
  },
  image: {
    objectFit: "contain"
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    height: rem(35)
  }
}))

export default useStyles
