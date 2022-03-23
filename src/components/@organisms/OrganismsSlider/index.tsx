import { css } from '@emotion/react';
import { AtomCarruosell } from '@ixulabs/ui';
import { FC } from 'react';

const OrganismsSlider: FC<{
  children?: JSX.Element[];
  previews?: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}> = ({ children, breakpoints, previews }) => (
  <AtomCarruosell
    width="100%"
    direction="horizontal"
    slidesPerView={previews || 5}
    swiperProps={{
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination'
      },
      breakpoints: breakpoints
    }}
    height="100vh"
    customCSS={css`
      margin: 50px 0;

      .swiper {
        height: 100%;
      }
      .swiper-pagination {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .swiper-pagination-bullet {
          margin: 3px 0 !important;
          background-color: #aaaaaa;
        }
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: transparent;
      }
      .swiper-pagination-bullet-active {
        background-color: transparent;
        border: solid 2px transparent;
        width: 10px;
        height: 10px;
        ::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    `}
  >
    {children}
  </AtomCarruosell>
);

export default OrganismsSlider;
