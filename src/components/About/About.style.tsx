import { createStyles, keyframes, rem } from "@mantine/core"

export const shadow = keyframes({
  "0%": { boxShadow: "0 0 10px 0 rgba(69, 69, 69, 0.2 )" },
  "100%": { boxShadow: "0 0 20px 0 rgba( 69, 69, 69, 69.35 )" }
})

const useStyles = createStyles(theme => ({
  root: {
    minHeight: "100vh",
    paddingTop: "10vh"
  },
  span: {
    color: "#99ee6f"
  },
  title: {
    color: theme.colors.dark[0]
  },
  wrapper: {
    width: rem(180),
    height: rem(180),
    position: "relative"
  },
  image: {
    objectFit: "cover",
    borderRadius: rem(45),
    animation: `${shadow} 1.5s ease-in-out infinite alternate`
  },

  indent: {
    paddingLeft: "15%"
  }
}))

export default useStyles
