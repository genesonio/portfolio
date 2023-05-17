import {ActionIcon} from "@mantine/core"
import {useWindowScroll} from "@mantine/hooks"
import {IconCircleChevronUp} from "@tabler/icons-react"
import useStyles from "./BackToTop.styles"

const BackToTop = () => {
  const [scroll, scrollTo] = useWindowScroll()
  const {classes} = useStyles()

  return (
    <>
      {scroll.y > 100 ? (
        <ActionIcon className={classes.backToTop} variant="transparent">
          <IconCircleChevronUp
            color="#91B4D5"
            stroke={1.2}
            size={48}
            onClick={() => scrollTo({x: 0, y: 0})}
          />
        </ActionIcon>
      ) : null}
    </>
  )
}

export default BackToTop
