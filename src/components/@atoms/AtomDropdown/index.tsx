import { css } from '@emotion/react';
import { FC, useState } from 'react';
import AtomIcon from '@ixulabs/ui/build/@atoms/AtomIcon';
import AtomLink from '@ixulabs/ui/build/@atoms/AtomLink';
import AtomText from '@ixulabs/ui/build/@atoms/AtomText';
import { RecursiveDropdownHook } from './types';

import {
  ContainerDropdownStyled,
  ContainerLinkStyled,
  DropdownStyled,
  LinkStyled
} from './style';

const DefaultAnimation = {
  transition: {
    default: { duration: 0.3 }
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const RecursiveDropdownHook: FC<RecursiveDropdownHook> = (props) => {
  const { data, componentsProps } = props;
  const [hover, setHover] = useState(false);
  return (
    <ContainerLinkStyled {...DefaultAnimation}>
      {data?.map((link) => (
        <LinkStyled key={link.id}>
          {link.type === 'dropdown' ? (
            <ContainerDropdownStyled
              onHoverEnd={() => setHover(false)}
              onHoverStart={() => setHover(true)}
              {...componentsProps?.containerProps}
            >
              <AtomText
                onHoverStart={() => setHover(true)}
                fontSize="12px"
                as="a"
                {...link}
                color="#7F7F7F"
                padding="5px 15px"
                margin="4px 0px"
                align="right"
                fontWeight={600}
                customCSS={css`
                  display: flex;
                  cursor: pointer;
                  flex-direction: row;
                  align-items: center;
                  border-radius: 2px;
                  text-align: center;
                `}
                {...componentsProps?.textProps}
              >
                {link.label}
                <AtomIcon
                  customCSS={css`
                    margin: 0px 0px 0px 10px;
                    transform: rotate(-90deg);
                  `}
                  height="10px"
                  width="10px"
                  color="#7F7F7F"
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                />
              </AtomText>
              {link.subFields && hover && (
                <DropdownStyled margin="0px" key={link.id}>
                  <RecursiveDropdownHook data={link.subFields} />
                </DropdownStyled>
              )}
            </ContainerDropdownStyled>
          ) : (
            <AtomLink
              fontSize="12px"
              as="a"
              {...link}
              color="#7F7F7F"
              padding="10px 15px"
              width="100%"
              fontWeight={600}
              customCSS={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 2px;
                text-align: center;
                :hover {
                  width: 100%;
                  background-color: #dadada;
                }
                transition: background-color 0.3s ease;
              `}
              {...componentsProps?.AtomLinkProps}
            >
              {link.label}
            </AtomLink>
          )}
        </LinkStyled>
      ))}
    </ContainerLinkStyled>
  );
};

export default RecursiveDropdownHook;
