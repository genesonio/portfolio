import { createStyles, rem } from "@mantine/core"

export const HEADER_HEIGHT: string = rem(60)

const useStyles = createStyles(theme => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "rgba(0, 0, 0, 0.5)",
    position: "relative",
    zIndex: 1
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },

  logo: {
    color: theme.colors.dark[2]
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    color: theme.colors.dark[2],
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: "15px",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "rgba(169, 169, 169, 0.05)"
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: "rgba(169, 169, 169, 0.08)"
    }
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  }
}))

export default useStyles
