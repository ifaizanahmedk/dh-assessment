import styled from "styled-components";
import {
  Button as AntButton,
  Checkbox as AntCheckbox,
  Form as AntForm,
  Input as AntInput,
} from "antd";

import { H2 } from "theme/typography";
import { COLOR, SPACING } from "theme";

export const FormTitle = styled(H2)`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0;
`;

export const Form = styled(AntForm)`
  flex: 1 0 100%;
  max-width: 400px;
  width: 100%;
  padding: ${SPACING.x6};
`;

export const FormItem = styled(AntForm.Item)`
  .ant-input-affix-wrapper {
    padding: ${SPACING.x3} ${SPACING.x4};
  }
`;

export const Input = styled(AntInput)``;

export const Checkbox = styled(AntCheckbox)`
  .ant-checkbox-inner {
    margin: -0.35em 0 0;
  }
`;

export const ForgotPassword = styled.a`
  float: right;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;

  &:hover {
    color: ${COLOR.CHARCOAL};
  }
`;

export const StyledButton = styled(AntButton)`
  width: 100%;
  margin-top: ${SPACING.x4};
  height: 42px !important;
  letter-spacing: 1px;
  border-radius: 6px !important;
  background-color: ${({ theme }) => theme.colors.primary};
`;
