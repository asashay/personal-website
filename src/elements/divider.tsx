/** @jsx jsx */
import { jsx } from "theme-ui"
import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
  isStatic?: boolean
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
  isStatic = false,
}: DividerProps) => {
  const styles = {
    position: `absolute` as const,
    width: `full`,
    height: `full`,
    background: bg,
    backgroundColor: bg,
    "#contact-wave": {
      color: fill,
      fill: `currentColor`,
    },
    clipPath,
  }

  if (isStatic) {
    return (
      <div sx={{ ...styles, inset: 0 }} className={className} aria-hidden="true">
        {children}
      </div>
    )
  }

  return (
    <ParallaxLayer
      sx={styles}
      speed={speed}
      offset={offset}
      factor={factor}
      className={className}
    >
      {children}
    </ParallaxLayer>
  )
}

export default Divider
