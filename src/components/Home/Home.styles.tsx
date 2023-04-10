import { createStyles, rem } from "@mantine/core"

export const HEADER_HEIGHT: string = rem(60)

const useStyles = createStyles(theme => ({
  root: {
    position: "relative",
    height: "100vh",
    top: `-${HEADER_HEIGHT}`,
    paddingTop: HEADER_HEIGHT
  },
  container: {
    height: "100%"
  },
  grid: {
    height: "100%"
  },
  col: {
    display: "flex",
    alignItems: "center"
  },
  text: {
    color: theme.colors.dark[0],
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
  }
}))

export default useStyles
