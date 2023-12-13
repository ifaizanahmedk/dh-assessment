import styled from "styled-components";
import { DEVICE, SPACING } from "theme";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  min-height: 50vh;
  margin: ${SPACING.x6};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  border-radius: 12px;
  padding: ${SPACING.x16};
  gap: ${SPACING.x10};

  @media ${DEVICE.lg} {
    flex-direction: row-reverse;
  }
`;

export const LoginForm = styled.form`
  flex: 1 0 100%;
  max-width: 480px;
  width: 100%;
  padding: ${SPACING.x6};
`;

// Illustration wrapper styles
export const IllustrationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 800px;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  img,
  svg {
    display: block;
    width: 100%;
    min-width: 300px;
  }
`;
