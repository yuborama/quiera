import { css } from '@emotion/react';
import { AtomLink, AtomText } from '@sweetsyui/ui';
import { FC } from 'react';

const ButtonHelp: FC = () => {
  return (
    <AtomLink
      href="https://quiera.org/donacion/"
      customCSS={css`
        background-color: #de2d6e;
        border-radius: 5px;
        width: 159px;
        height: 48px;
        font-size: 16px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <AtomText
        as="p"
        margin="15px"
        fontSize="16px"
        color="white"
        fontWeight="bold"
      >
        Quiero ayudar
      </AtomText>
    </AtomLink>
  );
};

export default ButtonHelp;
