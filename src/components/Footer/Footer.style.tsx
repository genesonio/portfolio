import { createStyles, rem } from "@mantine/core"

export const FOOTER_HEIGHT: string = rem(80)

const useStyles = createStyles(theme => ({
  footer: {
    height: FOOTER_HEIGHT,
    backgroundColor: "rgba(49, 56, 77, 0.5)",
    borderColor: "rgba(49, 56, 77, 0.5)"
  },
  inner: {
    height: FOOTER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    color: theme.colors.dark[0]
  },
  span: {
    color: theme.colors.dark[1]
  }
}))

export default useStyles
