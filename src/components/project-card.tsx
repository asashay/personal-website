import { useState, type MouseEventHandler } from "react"
import type { ThemeUIStyleObject } from "theme-ui"

import "react-image-gallery/styles/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import arrowLeft from '../images/left-chevron.svg';

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  images: { original: string }[]
}

const ProjectCard = ({ link, title, children, bg, images = [] }: ProjectCardProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const arrowStyle: ThemeUIStyleObject = {
    cursor: 'pointer',
    alignItems: 'center',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    color: 'white',
    display: 'flex',
    height: '44px',
    justifyContent: 'center',
    padding: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '44px',
    zIndex: 2,
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  };
  const renderLeftNav = (onClick: MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
    return (
      <button
        aria-label="Previous image"
        sx={arrowStyle}
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <img src={arrowLeft} alt="" sx={{ height: '24px', width: '24px' }} />
      </button>
    )
  }

  const renderRightNav = (onClick: MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
    return (
      <button
        aria-label="Next image"
        sx={{
          ...arrowStyle,
          right: 0,
        }}
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <img
          src={arrowLeft}
          alt=""
          sx={{ height: '24px', transform: 'scale(-1, 1)', width: '24px' }}
        />
      </button>
    )
  }

  const handleDescriptionClick = () => setShowDescription(!showDescription);
  
  return (
    <div 
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [3, 4],
        py: [3, 4],
        color: `white`,
        background: bg || `none`,
        display: 'flex',
        flexDirection: 'column',
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        '@media (hover: hover)': {
          "&:hover": {
            color: `white !important`,
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
        },
        height: '100%'
      }}
    >
        <div sx={{ 
          flex: 1,
          minHeight: ['210px', '230px'],
          'p': { margin: '0'},
          'ul': { margin: '12px 0', paddingLeft: '1.25rem' },
        }}>
          {
            showDescription ? <div sx={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '100%',
            }}>{children}</div> :
              <ImageGallery
                items={images}
                showThumbnails={false}
                showPlayButton={false}
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                showFullscreenButton={false}
              />
          }
        </div>
        <div
          sx={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            fontSize: ['1.5rem', '1.75rem', '2rem'],
            lineHeight: 1.25,
            marginTop: '10px',
          }}
        >
          {title}
        </div>
        <div sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <button
            aria-expanded={showDescription}
            onClick={handleDescriptionClick}
            type="button"
            sx={{
              alignItems: 'center',
              appearance: 'none',
              background: 'transparent',
              border: 0,
              color: '#fff',
              cursor: 'pointer',
              display: 'inline-flex',
              font: 'inherit',
              minHeight: '44px',
              padding: 0,
              textDecoration: 'underline',
              '&:hover': { fontWeight: 'bold', transition: 'font-weight 0.2s ease-in-out'}
            }}
          >
            {showDescription ? 'Show images' : 'More info'}
          </button>
          <a href={link} sx={{
              alignItems: 'center',
              cursor: 'pointer',
              color: '#fff',
              display: 'inline-flex',
              minHeight: '44px',
              textDecoration: 'underline',
              fontWeight: 'bold'
          }}>
            Website
          </a>
          
        </div>

    </div>
  )
}

export default ProjectCard
