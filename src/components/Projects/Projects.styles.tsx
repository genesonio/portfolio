import { createStyles, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  root: {
    minHeight: "90vh",
    height: "max-content",
    paddingTop: "10vh"
  },
  span: {
    color: theme.colors.dark[1]
  },
  image: {
    objectFit: "cover",
    borderRadius: rem(15)
  },
  imageWrapper: {
    alignSelf: "center",
    position: "relative",
    width: "50%",
    height: rem(225)
  },
  card: {
    padding: rem(18),

    minHeight: rem(300),
    columnGap: rem(24),

    boxShadow: "inset rgba(0, 0, 0, 0.3) 0px 0px 15px 5px",
    borderRadius: "15px"
  },
  info: {
    flexDirection: "column",
    maxWidth: "50%",
    textAlign: "center",
    color: theme.colors.dark[3],
    textDecoration: "none"
  },
  link: {
    textDecoration: "none",
    color: theme.colors.dark[2]
  },
  title: {
    color: theme.colors.dark[0],
    textAlign: "center"
  }
}))

export default useStyles
