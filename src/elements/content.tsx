import { ParallaxLayer } from "@react-spring/parallax"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
  isStatic?: boolean
}

const contentStyles = {
  padding: [3, 4, 4, 5],
  overflow: `hidden`,
  display: `flex`,
  flexDirection: `column` as const,
  alignItems: `center`,
  justifyContent: `center`,
  zIndex: 50,
}

const Content = ({ speed, offset, children, className = ``, factor = 1, isStatic = false }: ContentProps) => {
  if (isStatic) {
    return (
      <div
        sx={{
          ...contentStyles,
          position: `relative`,
          minHeight: `100vh`,
          "@supports (height: 100svh)": {
            minHeight: `100svh`,
          },
        }}
        className={className}
      >
        {children}
      </div>
    )
  }

  return (
    <ParallaxLayer
      sx={contentStyles}
      speed={speed}
      offset={offset}
      factor={factor}
      className={className}
    >
      {children}
    </ParallaxLayer>
  )
}

export default Content
