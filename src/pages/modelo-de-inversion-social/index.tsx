import { css } from '@emotion/react';
import { AtomImage, AtomText, AtomWrapper } from '@ixulabs/ui';
import { FC } from 'react';
import ButtonHelp from './components/ButtonHelp';
import Image from 'next/image'

const ModeloDeInversionSocial: FC = () => {
  return (
    <AtomWrapper
      customCSS={css`
        font-family: Montserrat;
      `}
    >
      <AtomWrapper
        flexWrap="wrap"
        alignItems="center"
        customCSS={css`
          display: flex;
          width: 100%;
          padding: 100px 0;
          justify-content: space-around;
          flex-direction: row;

          @media (max-width: 768px) {
            width: 100%;
            padding: 20px;
            justify-content: center;
            flex-direction: column-reverse;
          }
        `}
      >
        <AtomWrapper
          flexWrap="wrap"
          customCSS={css`
            width: 460px;
            @media (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <AtomText
            as="h1"
            fontSize="36px"
            fontWeight="bold"
            customCSS={css`
              @media (max-width: 1024px) {
                padding: 10px;
                width: 100%;
                text-align: left;
                justify-content: center;
              }
              @media (max-width: 768px) {
                width: 100%;
                text-align: center;
                font-size: 24px;
              }
            `}
          >
            Modelo de Inversión Social
          </AtomText>
          <AtomWrapper
            width="450px"
            customCSS={css`
              overflow: scroll;
              overflow-x: hidden;
              overflow-y: auto;
              justify-content: flex-start;
              top: 0;
              height: 500px;
              @media (max-width: 768px) {
                height: auto;
                width: 100%;
              }
            `}
          >
            {Phrases.map((Phrase) => (
              <AtomText
                as="p"
                cursor="text"
                font="Montserrat"
                fontSize="17px"
                fontWeight={500}
                key={`Phrase_id${Phrase}`}
                margin="20px 0"
                customCSS={css`
                  @media (max-width: 768px) {
                    text-align: center;
                  }
                `}
              >
                {Phrase}
              </AtomText>
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomImage
          src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/MODELO-DE-INVERSI%C3%93N-SOCIAL%20(3).png"
          alt="model"
          customCSS={css`
            cursor: pointer;
            &:hover {
              img {
                transition: transform 0.7s ease-in-out;
                transform: rotate(360deg);
              }
            }
            @media (min-width: 1024px) {
              width: 800px;
            }
            @media (max-width: 1024px) {
              width: 430px;
            }
            @media (max-width: 768px) {
              width: 100%;
              height: 100%;
            }
          `}
        />
      </AtomWrapper>
      <AtomWrapper
        margin="100px 0"
        customCSS={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <AtomImage
          src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/modelodeinversionsocialchild.jpg"
          alt="model"
          width="434px"
          height="451px"
          customCSS={css`
            margin: 50px 0;
            img {
              border-radius: 10px;
            }
            @media (min-width: 1024px) {
              width: 500px;
            }
            @media (max-width: 1024px) {
              width: 430px;
            }
            @media (max-width: 768px) {
              width: 100%;
              height: 100%;
              padding: 20px;
            }
          `}
        />
        <AtomWrapper
          width="540px"
          customCSS={css`
            display: flex;
            @media (max-width: 1440px) {
              width: 540px;
            }
            /* @media (min-width: 1024px) {
              width: 530px;
            } */
            @media (max-width: 768px) {
              height: auto;
              width: 100%;
              margin: 0;
              padding: 20px;
              align-items: center;
            }
          `}
        >
          <AtomText
            as="h1"
            color="#DE2D6E"
            fontSize="32px"
            fontWeight="bold"
            customCSS={css`
              @media (max-width: 1024px) {
                text-align: left;
                font-size: 24px;
              }
              @media (max-width: 768px) {
                text-align: center;
                font-size: 26px;
                width: 100%;
              }
            `}
          >
            Nuestra Teoría de Cambio es la base que nos permite lograr nuestra
            misión
          </AtomText>
          <AtomText
            as="p"
            cursor="text"
            fontSize="17px"
            margin="20px 0"
            customCSS={css`
              @media (max-width: 1024px) {
                width: 100%;
                text-align: left;
              }
              @media (max-width: 768px) {
                text-align: center;
              }
            `}
          >
            Contribuir a que en México existan niños, niñas y jóvenes con
            condiciones sociales y familiares que promuevan a su desarrollo
            pleno, mediante el fortalecimiento institucional y la asignación de
            recursos a Organizaciones de la Sociedad Civil (OSC) para la
            articulación de esfuerzos orientados a restituir sus derechos,
            mejorar su calidad de vida y alcanzar su desarrollo integral,
            construyendo alianzas estratégicas para potenciar sus oportunidades
            de desarrollo e inclusión social.
          </AtomText>

          <ButtonHelp />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

const Phrases = [
  'Ejercemos nuestra inversión social y cada estrategia de fortalecimiento para impulsar la construcción de capacidades dentro de las IFQs con la finalidad de lograr un mayor impacto en las problemáticas de los niños y jóvenes que atienden, y para que realicen un manejo eficiente de sus recursos con el objetivo de que sus esfuerzos sean sostenibles a lo largo del tiempo. Nuestro modelo de inversión cuenta con tres ejes estratégicos de acción, en los que nuestras tres diferentes áreas interactúan y coadyuvan para fortalecer vidas.',
  'A partir de 2020, todos nuestros esfuerzos y recursos como fundación donante se dirigieron al fortalecimiento de las organizaciones que forman parte de nuestra red, mediante cofinanciamiento multianuales respaldados en un Plan de Desarrollo personalizado y co-creado con las mismas organizaciones para impulsar su gestión institucional y la efectividad de su modelo de atención. Para nosotros, esto ha significado la reconfiguración de nuestras labores operativas y sociales para lograr la sincronía de nuestras acciones y modelo de inversión social.',
  'Al concentrar nuestros recursos en el fortalecimiento institucional buscamos multiplicar el impacto de nuestra inversión social y hacerla más efectiva; además, creemos que con esto también generamos un conocimiento sobre las estrategias que detonan un desarrollo más acelerado de las organizaciones, para devolver estos aprendizajes al sector de las Organizaciones de la Sociedad Civil en México.'
];

export default ModeloDeInversionSocial;
