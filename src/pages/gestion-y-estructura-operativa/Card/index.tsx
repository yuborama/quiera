import { AtomButton, AtomImage, AtomText } from '@sweetsyui/ui';
import { FC, useState } from 'react';
import { PageDiagramBox } from '..';
// import { PageDiagramBox } from '../style';
import { PageHeaderCard } from '../../../styles/style';
import Image from 'next/image'

type Props = {
  title: string;
  list: string[];
};

const Card: FC<Props> = ({ list, title }) => {
  const [show, setShow] = useState(false);

  const baseUrlIcons = (name: string) =>
    ` https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/${name}.svg`;
  return (
    <PageDiagramBox {...{ show }} onClick={() => setShow(!show)} >
      <PageHeaderCard>
        <AtomText as="h1" fontSize="22px" fontWeight={600}>
          {title}
        </AtomText>
        <AtomImage
          src={show ? baseUrlIcons('arrowup') : baseUrlIcons('arrowdown')}
          alt="graphic"
          width="40px"
          height="40px"
        />
      </PageHeaderCard>
      {show && (
        <>
          {list.map((item) => (
            <AtomText
              as="p"
              width="auto"
              fontSize="15px"
              fontWeight={500}
              margin="10px 0"
              key={item}
            >
              <AtomText as="span" fontWeight={600} color="#DE2D6E">
                ●{' '}
              </AtomText>

              {item}
            </AtomText>
          ))}
        </>
      )}
    </PageDiagramBox>
  );
};

export default Card;
