import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CVText = styled.a`
  ${tw`font-sans`};
  font-size: 28px;
  color: #40bf75;
  margin-right: 20px;
`

class CVButton extends React.Component {
  state = {
    showDescription: false
  }

  render() {
    const {  } = this.props;
    return (
      <CVText href="https://www.upwork.com/fl/oleksandroliynyk2" target="_blank" rel="noopener">
        Upwork profile
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
