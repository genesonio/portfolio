import { createStyles, keyframes, rem } from "@mantine/core"

export const shadow = keyframes({
  "0%": { boxShadow: "0 0 10px 5px rgba(69, 69, 69, 0.2 )" },
  "100%": { boxShadow: "0 0 20px 5px rgba( 69, 69, 69, 69.35 )" }
})

const useStyles = createStyles(theme => ({
  root: {
    minHeight: "100vh",
    paddingTop: "10vh"
  },
  span: {
    color: theme.colors.dark[1]
  },
  title: {
    color: theme.colors.dark[0]
  },
  wrapper: {
    width: rem(180),
    height: rem(180),
    position: "relative",
    borderRadius: rem(45),
    animation: `${shadow} 1.5s ease-in-out infinite alternate`,
    [theme.fn.smallerThan("md")]: {
      width: rem(120),
      height: rem(120),
      margin: "auto",
      left: "90%",
      borderRadius: rem(20)
    }
  },
  image: {
    objectFit: "cover",
    borderRadius: rem(45),
    [theme.fn.smallerThan("md")]: {
      borderRadius: rem(20)
    }
  },

  indent: {
    paddingLeft: "15%",
    [theme.fn.smallerThan("md")]: {
      paddingLeft: "5%"
    }
  }
}))

export default useStyles
