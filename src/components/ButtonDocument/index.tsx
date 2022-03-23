import { css } from '@emotion/react';
import { AtomButton, AtomIcon, AtomWrapper } from '@sweetsyui/ui';
import { FC, useState } from 'react';

const documents = [
  {
    id: 'document-1',
    label: 'Informe 2021 completo',
    link: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/documents/Informe%20Quiera%202021%20(baja%20resolucion).pdf'
  },
  {
    id: 'document-2',
    label: 'Resumen en español',
    link: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/documents/Resumen%20espa%C3%B1ol.pdf'
  },
  {
    id: 'document-3',
    label: 'Resumen en inglés',
    link: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/documents/Resumen%20ingles.pdf'
  }
];

const ButtonDocument: FC = () => {
  const [modal, setModal] = useState(false);

  const downloadDocument = async (url: string, name: string) => {
    const data = await fetch(url);
    const blob = await data.blob();
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = name;
    link.click();
    setModal(false);
  };
  return (
    <AtomWrapper width="max-content" margin="0 auto" position="relative">
      <AtomButton
        margin="10px 0"
        onClick={() => {
          setModal(!modal);
        }}
        customCSS={css`
          font-family: Montserrat;
          font-weight: 600;
          border-radius: 5px;
          background-color: #de2d6e;
        `}
      >
        Descargar Informe
      </AtomButton>
      {modal && (
        <AtomWrapper
          position="absolute"
          backgroundColor="white"
          padding="20px 10px"
          borderRadius="5px"
          customCSS={css`
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            top: 100%;
            gap: 10px;
          `}
        >
          {documents.map((item) => (
            <AtomButton
              onClick={() => {
                downloadDocument(item.link, item.label);
              }}
              key={item.id}
              width="auto"
              padding="0"
              backgroundColor="transparent"
              color="black"
              customCSS={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                text-align: left;
                font-size: 11.2px;
                &:hover {
                  color: #de2d6e;
                  svg {
                    path {
                      fill: #de2d6e !important;
                    }
                  }
                }
              `}
            >
              <AtomIcon
                width="30px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/carbon_document-download.svg"
              />
              {item.label}
            </AtomButton>
          ))}
        </AtomWrapper>
      )}
    </AtomWrapper>
  );
};

export default ButtonDocument;
