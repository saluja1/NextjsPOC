import styled from 'styled-components';

const SocialLinksBar = styled.div`
  padding: 0px 45px;
  background-color: #fee000;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    padding: 0 22px;
  }
  @media (max-width: 360px) {
    padding: 0;
  }
`;

const SocialMediaBarHeading = styled.h2`
    font-weight: 600;
    font-size: 24px;
`;

const SocialLinkTag = styled.a`
  width: 40px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  color: #000;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  margin: 0 15px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s;
`;

const SocialMediaBar = props => (
	<SocialLinksBar>
		<SocialMediaBarHeading>Follow Us</SocialMediaBarHeading>
		<SocialLinkTag href=""><i className="fab fa-facebook-f"></i></SocialLinkTag>
		<SocialLinkTag href=""><i className="fab fa-instagram"></i></SocialLinkTag>
		<SocialLinkTag href=""><i className="fab fa-youtube"></i></SocialLinkTag>
	</SocialLinksBar>
);

export default SocialMediaBar;