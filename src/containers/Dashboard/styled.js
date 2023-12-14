import { SPACING } from "src/theme";
import styled from "styled-components";

export const Spacer = styled.div`
  display: block;
  height: calc(${(props) => props.gap} * ${SPACING.x1});
`;

export const ContentHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1 1 auto;

  .ant-card {
    flex: 1 0 auto;
  }
`;
