import { createStyles } from "@mantine/core"

const useStyles = createStyles(theme => ({
  root: {
    minHeight: "100vh",
    paddingBlock: '10vh'
  },
  span: {
    color: theme.colors.dark[1]
  },
  title: {
    color: theme.colors.dark[0],
    textAlign: "center"
  },
  button: {
    backgroundColor: "transparent",
    color: theme.colors.dark[2],
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px 5px",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 15px 5px"
    },

    "&:active": {
      boxShadow: "inset rgba(0, 0, 0, 0.3) 0px 0px 15px 5px"
    }
  }
}))

export default useStyles
