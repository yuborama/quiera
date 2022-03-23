import { css } from '@emotion/react';
import {
  AtomWrapper,
  Header, HeaderLink, HeaderLogo, HeaderSidebar
} from '@sweetsyui/ui';
import { Link } from '@Src/components/@atoms/AtomDropdown/types';
import ButtonDocument from '@Src/components/ButtonDocument';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { icons } from '../../../../assets/index';

const Links: Link[] = [
  {
    id: uuidv4(),
    label: 'CARTA DE PRESIDENCIA',
    link: '/carta-de-presidencia'
  },
  {
    id: uuidv4(),
    label: 'MODELO DE INVERSIÓN SOCIAL',
    link: '/modelo-de-inversion-social'
  },
  {
    id: uuidv4(),
    label: 'GESTIÓN SOCIAL',
    link: '/gestion-social'
  },
  {
    id: uuidv4(),
    label: 'GESTIÓN Y ESTRUCTURA OPERATIVA',
    link: '/gestion-y-estructura-operativa'
  }
];

// const LinksUsersRole: any[] = [];

const DefaultHeader = () => {
  const [screenWidth, setscreenWidth] = useState<number>(0);
  useEffect(() => {
    const updateHeight = () => {
      const w = document.documentElement.clientWidth;
      setscreenWidth(w);
    };
    updateHeight();
    window.addEventListener(`resize`, updateHeight);
  }, []);
  return (
    <>
      <Header
        customCSS={css`
          height: 90px;
          justify-content: space-between;
          @media screen and (max-width: 1200px) {
            justify-content: space-between !important;
          }
        `}
      >
        <AtomWrapper
          flexDirection="row"
          // flexWrap="wrap"
          alignItems="center"
          width="auto"
        >
          <HeaderLogo
            src={icons.logo1}
            linkProps={{
              link: `/`,
              customCSS: css`
                margin-right: 5%;
                width: 185px;
                /* height: 80px; */
                margin-top: 17px;
                @media screen and (max-width: 1200px) {
                  margin-right: 0;
                }
              `
            }}
          />
          <HeaderLink links={Links} linksLength={screenWidth < 1340 ? 3 : 4} />
        </AtomWrapper>
        <AtomWrapper
          width="max-content"
          customCSS={css`
            @media screen and (max-width: 1200px) {
              display: none;
            }
          `}
        >
          <ButtonDocument />
        </AtomWrapper>
        <HeaderSidebar
          Links={Links}
          buttonProps={{
            customCSS: css`
              position: relative;
            `
          }}
        >
          <ButtonDocument />
        </HeaderSidebar>
      </Header>
    </>
  );
};

export default DefaultHeader;
