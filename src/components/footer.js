import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedIcon } from '@components/icons';
import { socialMedia, lastUpdated } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;
const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {

    }
  }, []);

  return (
    <StyledContainer>
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                <FormattedIcon name={name}/>
              </StyledSocialLink>
            </li>
          ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabindex="-1">
        <StyledGitHubLink
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>Designed &amp; Built by Brittany Chiang |</div>

        </StyledGitHubLink>
        <StyledGitHubLink
          href="https://github.com/anmol098"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>| Customized By Anmol Pratap Singh</div>

        </StyledGitHubLink>
        <StyledGitHubInfo>
          <span>
            <span>Last Updated on: {lastUpdated}</span>
          </span>
        </StyledGitHubInfo>
      </StyledMetadata>
    </StyledContainer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
