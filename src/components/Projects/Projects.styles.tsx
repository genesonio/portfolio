import { createStyles, rem } from "@mantine/core"

const useStyles = createStyles(theme => ({
  root: {
    minHeight: "90vh",
    height: "max-content",
    paddingTop: "10vh"
  },
  span: {
    color: "#99ee6f"
  },
  image: {
    objectFit: "contain"
  },
  imageWrapper: {
    position: "relative",
    width: rem(430)
  },
  card: {
    paddingBlock: rem(25),
    paddingInline: rem(10),

    height: rem(300),

    columnGap: rem(20),

    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 25px 5px",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",

    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  },
  info: {
    flexDirection: "column",
    maxWidth: "50%",
    textAlign: "center",
    color: theme.colors.dark[0],
    textDecoration: "none"
  },
  link: {
    textDecoration: "none",
    color: theme.colors.dark[0]
  },
  title: {
    color: theme.colors.dark[0],
    textAlign: "center"
  }
}))

export default useStyles
