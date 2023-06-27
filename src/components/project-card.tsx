/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState} from "react"

import "react-image-gallery/styles/css/image-gallery.css";
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
  const arrowStyle = {
    cursor: 'pointer',
    height: '32px',
    position: 'absolute',
    top: '100px',
    zIndex: 2,
    fill: 'white',
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  };
  const renderLeftNav = (onClick, disabled: boolean) => {
    return (
      <img
        sx={arrowStyle}
        src={arrowLeft}
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick} />
    )
  }

  const   renderRightNav = (onClick, disabled) => {
    return (
      <img
        sx={{
          ...arrowStyle,
          transform: 'scale(-1, 1)',
          right: 0,
        }}
        src={arrowLeft}
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick} />
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
        px: 4,
        py: 4,
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
        height: '100%'
      }}
    >
        <div sx={{ 
          height: '70%', 
          minHeight: '70%', 
          maxHeight: '70%',
          'p': { margin: '0'},
          'ul': { margin: '15px 0'},
        }}>
          {
            showDescription ? <div sx={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
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
            fontSize: '2rem',
            marginTop: '10px',
          }}
        >
          {title}
        </div>
        <div sx={{ display: 'flex'}}>
          <span onClick={handleDescriptionClick}
            sx={{
              cursor: 'pointer',
              marginRight: '10px',
              '&:hover': { fontWeight: 'bold', transition: 'font-weight 0.2s ease-in-out'}
            }}
          >
            { `${showDescription ? 'Less text' : 'More info...' } |`}
          </span>
          <a href={link} sx={{
              cursor: 'pointer',
              color: '#fff',
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
