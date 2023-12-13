import styled, { css } from "styled-components";
import { DEVICE } from "./media-queries";
import { COLOR } from "./color";

const defaultHeadingStyles = css`
  font-family: inherit;
  font-weight: 300;
  margin: 0 0 0.5em;
  color: inherit;
`;

export const H1 = styled.h1`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 32px;

  @media ${DEVICE.xl} {
    font-size: 40px;
  }

  @media ${DEVICE.xxxl} {
    font-size: 64px;
  }
`;

export const H2 = styled.h2`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 27px;

  @media ${DEVICE.xxl} {
    font-size: 36px;
  }
  @media ${DEVICE.xxxl} {
    font-size: 48px;
  }
`;

export const H3 = styled.h3`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
`;

export const H4 = styled.h4`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 20px;
`;

export const H5 = styled.h5`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 17px;
`;

export const H6 = styled.h6`
  ${defaultHeadingStyles}
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 15px;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: ${(props) => (props.noMargin ? 0 : "0 0 1em")};
  font-size: 13px;

  @media ${DEVICE.xl} {
    font-size: 16px;
  }

  @media ${DEVICE.xxxl} {
    font-size: 17px;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: ${COLOR.GRAY};
`;
