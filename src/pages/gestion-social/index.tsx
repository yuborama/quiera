import { css } from '@emotion/react';
import { AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { FC } from 'react';
import { colors } from '../../assets';
import Image from 'next/image'

const GestionSocial: FC = () => {
  return (
    <AtomWrapper
      customCSS={css`
        font-family: Montserrat;
      `}
    >
      <AtomWrapper
        customCSS={css`
          display: flex;
          width: 100%;
          padding: 100px 0;
          justify-content: space-between;
          flex-direction: row;
          @media (max-width: 1024px) {
            padding: 100px 0;
          }
          @media (max-width: 768px) {
            width: 100%;
            padding: 20px;
            flex-direction: column;
          }
        `}
      >
        <AtomWrapper>
          <AtomWrapper
            customCSS={css`
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              @media (max-width: 768px) {
                width: 100%;
                align-items: center;
                flex-direction: column-reverse;
              }
            `}
          >
            <AtomWrapper
              customCSS={css`
                display: flex;
                flex-direction: column;
                width: 412px;
                @media (max-width: 768px) {
                  width: 100%;
                  align-items: center;
                }
              `}
            >
              <AtomText margin="20px 0" as="h1" width='auto' customCSS={css`
                font: normal normal bold 32px/41px Montserrat !important;
              `}>
                Gestión Social
              </AtomText>
              <AtomWrapper
                width="450px"
                customCSS={css`
                  overflow: hidden;
                  overflow-y: scroll;
                  justify-content: flex-start;
                  top: 0;
                  height: 600px;
                  @media (max-width: 768px) {
                    width: 100%;
                    height: auto;
                  }
                `}
              >
                {phrases.map((phrase) => (
                  <AtomText
                    fontSize="17px"
                    as="p"
                    margin="20px 0"
                    width="100%"
                    key={`id_${phrase}`}
                  >
                    {phrase}
                  </AtomText>
                ))}
              </AtomWrapper>
            </AtomWrapper>
            <AtomImage
              src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/qusota.png"
              alt="image"
              width="600px"
              customCSS={css`
                transition: all 0.5s ease-in-out;
                cursor: pointer;
                background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/GestionSocial.png');
                &:hover {
                  background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/gestionsocial.png');
                }
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 97% 97%;
                position: sticky;
                @media (max-width: 1024px) {
                  width: 460px;
                }
                @media (max-width: 768px) {
                  width: 100%;
                }
              `}
            />
          </AtomWrapper>
          <AtomWrapper
            customCSS={css`
              display: flex;
              margin-top: 100px;
            `}
          >
            <AtomWrapper
              customCSS={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                flex-direction: column;
                @media (min-width: 1040px) {
                  padding: 100px 0;
                }
              `}
            >
              <AtomText
                as="h1"
                fontWeight="bold"
                width="375px"
                fontSize="24px"
                color={colors.primary}
                customCSS={css`
                  margin: 0 0 0 100px;
                  @media (max-width: 768px) {
                    margin: 0;
                    width: 100%;
                    text-align: center;
                  }
                `}
              >
                Esquema de Fortalecimiento Institucional
              </AtomText>
              <AtomWrapper alignItems="center">
                <AtomImage
                  alt="Esquema de fortalecimiento institucional"
                  // width="60%"
                  src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/ESQUEMA-DE-FORTALECIMIENTO-INSTITUCIONAL%20(2).png"
                  customCSS={css`
                    @media (min-width: 1024px) {
                      /* height: 641px; */
                      width: 1062px;
                    }
                  `}
                />
              </AtomWrapper>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

const phrases = [
  'Nuestra gestión social es cumplir la labor social que nos constituye, y la cual logramos en gran parte con la articulación del trabajo de dos áreas estratégicas, alineadas en un mismo esquema de fortalecimiento institucional.',
  'El área de Calidad y Evaluación es la encargada de diseñar y evaluar la estrategia de inversión social, incluyendo el esquema de fortalecimiento y formación de nuestras Instituciones Fortalecidas por Quiera (IFQs), así como de analizar los aprendizajes obtenidos para su incorporación al modelo de Fundación Quiera',
  'El área de Fortalecimiento Institucional gestiona los Planes de Desarrollo que de forma personalizada y colaborativa se crean y gestionan con cada IFQs; además distribuye y monitorea la inversión obtenida por medio de la Convocatoria Anual.',
  ' Ambas áreas buscan fortalecer a nuestra red de IFQs y aportar valor al tercer sector, con la finalidad de aportar al crecimiento sostenible del país. Nuestra gestión social impulsa el desarrollo social a través de la generación de capacidades, la promoción de alianzas y de objetivos compartidos que nos permitan unir esfuerzos entre actores claves, para juntos hacer más.',
  'A estas labores también se suma el área de Comunicación y Procuración para tener un vínculo activo y de confianza con cada uno de nuestros grupos de interés y en conjunto co-crear acciones y proyectos que fortalezcan las vidas de cientos de niños y jóvenes en situación o riesgo de calle, y las personas que trabajan por su inclusión social.'
];
//#DE2D6E

export default GestionSocial;
