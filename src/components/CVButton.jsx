import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CVText = styled.a`
  ${tw`font-sans`};
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`

class CVButton extends React.Component {
  state = {
    showDescription: false
  }

  render() {
    const {  } = this.props;
    return (
      <CVText href="http://cv.alexoliynyk.me" target="_blank" rel="noopener">
        Resume |
      </CVText>
    )
  }
}

export default CVButton

CVButton.CVButton = {
  // title: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // bg: PropTypes.string.isRequired,
}
