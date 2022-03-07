import React from "react";
import styled from "styled-components";
import BackGroundAnimation from "./BackgroundAnimation";

const ShootingIndex = () => {
  const StyledSection = styled.section`
    overflow: hidden;
    position: relative;
    background-color: var(--bg-dark);
    height: calc(100vh - var(--nav-height));
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  return (
    <>
      <StyledSection>
        <BackGroundAnimation />
      </StyledSection>
    </>
  );
};

export default ShootingIndex;
