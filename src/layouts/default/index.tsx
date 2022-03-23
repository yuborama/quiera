import { FC, useEffect, useLayoutEffect, useState } from 'react';
import {
  AtomIcon,
  AtomLink,
  AtomLoader,
  AtomText,
  AtomWrapper,
  Footer,
  FooterColumns,
  LayoutAnimation
} from '@ixulabs/ui';

import { css } from '@emotion/react';
import DefaultHeader from '@Src/components/@organisms/Header/default';

const socialLinks = [
  {
    id: 'social-link-1',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/facebook.svg',
    href: 'https://www.facebook.com/FundacionQuiera/'
  },
  {
    id: 'social-link-2',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/twitter.svg',
    href: 'https://twitter.com/FundacionQuiera'
  },
  {
    id: 'social-link-3',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/yt.svg',
    href: 'https://www.youtube.com/user/FundacionQuiera1'
  },
  {
    id: 'social-link-4',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/instagram.svg',
    href: 'https://www.instagram.com/fundacionquieramx/'
  }
];

type Props = {
  Role?: string | string[];
};



const DefaultLayout: FC<Props> = ({ children }) => {
    const [loader, setLoader] = useState(true)
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 2000)
  }, [])
  return (
    <>
      {loader ? (
        <>
        <DefaultHeader />
    <LayoutAnimation
      margin="90px 0 0 0"
      minHeight="calc(100vh - 90px)"
      justifyContent="flex-start"
      backgroundColor="white"
      customCSS={css`
      font-family: 'Roboto', sans-serif;
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        span {
          cursor: default;
        }
      `}
    >
      {children}
    </LayoutAnimation>
    <Footer backgroundColor="white" padding="0">
      <FooterColumns
        wrapper={css`
          max-width: inherit;
          margin: 10px 0;
          align-items: center;
        `}
      >
        <AtomText
          as="p"
          customCSS={css`
            @media (max-width: 768px) {
              text-align: center;
            }
          `}
        >
          © Copyright 2021 - Fundación Quiera - www.quiera.org
        </AtomText>
        <AtomText
          as="p"
          customCSS={css`
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
              width: auto;
            }
          `}
        >
          <AtomIcon
            customCSS={css`
              margin-right: 10px;
            `}
            width="20px"
            height="15px"
            color="#DE2D6E"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/email.svg"
          />
          quiera@abm.org.mx
        </AtomText>
        <AtomWrapper
          width="auto"
          customCSS={css`
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
            @media (max-width: 768px) {
              width: auto;
            }
          `}
        >
          {socialLinks.map((item) => (
            <AtomLink key={item.id} href={item.href}>
              <AtomIcon
                color="#DE2D6E"
                width="20px"
                icon={`
                    ${item.icon}
                  `}
                customCSS={css`
                  margin-right: 20px;
                `}
              />
            </AtomLink>
          ))}
        </AtomWrapper>
      </FooterColumns>
      <AtomWrapper
        alignItems="center"
        justifyContent="center"
        backgroundColor="#472f92"
        padding="10px"
      >
        <AtomLink href="https://cocrearconsultoria.com/">
          <AtomText
            color="white"
            align="center"
            width="max-content"
            fontSize="14px"
            fontWeight="bold"
          >
            Informe elaborado por Co-Crear Consultoría Integral
          </AtomText>
        </AtomLink>
      </AtomWrapper>
    </Footer>
          </>
      ) : (
      <AtomLoader isLoading={ true} type="fullscreen" colorLoading="#DE2D6E"  />
        )}
  </>
);
}
export default DefaultLayout;
