import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import arrowLeft from '../images/left-chevron.svg';

const Wrapper = styled.div`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-4 md:py-8 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-2`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Info = styled.div`
  ${tw`mt-1`};
  display: flex;
`

const Link = styled.a`
  ${tw`text-white`};
  cursor: pointer;
  color: #fff;
  text-decoration: underline;
  font-weight: bold;
`

const MoreInfo = styled.span`
  ${tw`mr-1`};
  cursor: pointer;
`

const ArrowLeft = styled.img`
  cursor: pointer;
  height: 32px;
  position: absolute;
  top: 100px;
  z-index: 2;
  fill: white;
  opacity: .6;
  &:hover {
    opacity: 1;
  }
`

const ArrowRight = styled(ArrowLeft)`
  transform: scale(-1, 1);
  right: 0;
`

class ProjectCard extends React.Component {
  state = {
    showDescription: false
  }

  handleDescriptionClick = () => this.setState({ showDescription: !this.state.showDescription })

  renderLeftNav = (onClick, disabled) => {
    return (
      <ArrowLeft
        src={arrowLeft}
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick} />
    )
  }

  renderRightNav = (onClick, disabled) => {
    return (
      <ArrowRight
        src={arrowLeft}
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick} />
    )
  }

  render() {
    const { title, link, children, bg, images, shortDescription } = this.props;
    return (
      <Wrapper bg={bg}>
        <>
          {
            this.state.showDescription ? <Text>{children}</Text> :
              <ImageGallery
                items={images}
                showThumbnails={false}
                showPlayButton={false}
                renderLeftNav={this.renderLeftNav}
                renderRightNav={this.renderRightNav}
                showFullscreenButton={false}
              />
          }

        </>
        <Title>{title}</Title>
        <Info>
          <MoreInfo onClick={this.handleDescriptionClick}>
            {
              `${this.state.showDescription ? 'Less text' : 'More info...' } |`
            }
          </MoreInfo>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Website
          </Link>
        </Info>
      </Wrapper>
    )
  }
}

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
