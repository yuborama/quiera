import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import OrganismsSlider from '../../components/@organisms/OrganismsSlider';
import Card from './Card';
// import { DiagramLine, PageDiagramBox } from './style';


type DiagramLine = {
  width?: string;
  height?: string;
  margin?: string;
};
type PageDiagramBox = {
  show?: boolean;
};


export const DiagramLine = styled.hr<DiagramLine>`
  height: ${({ height }) => height || '10px'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
  border: 2px solid black;
  opacity: 0.3;
  @media (max-width: 1024px) {
    width: auto;
    margin: 0;
    height: 50px;
  }
`;

export const PageDiagramBox = styled.button<PageDiagramBox>`
  font: normal normal normal 20px/24px Montserrat;
  width: 392px;
  height: ${({ show }) => (show ? 'auto' : '80px')};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
  padding: 20px;
  display: flex;
  flex-direction: ${({ show }) => (show ? 'column' : 'row')};
  justify-content: center;
  align-items: ${({ show }) => (show ? 'flex-start' : 'center')};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'normal' : 'pointer')};
  @media (max-width: 767px) {
    width: 88%;
    height: auto;
    padding: 20px;
  }
`;

export const Gestion = () => (
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
        align-items: center;
        @media (max-width: 1024px) {
          width: 100%;
        }
      `}
    >
      <AtomWrapper
        customCSS={css`
          width: 90%;
          justify-content: space-between;
        `}
      >
        <AtomText
          as="h1"
          color="black"
          fontSize="32px"
          fontWeight="bold"
          margin="25px 0"
        >
          Gobierno Institucional
        </AtomText>
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p {
              width: 45%;
            }
            @media (max-width: 1024px) {
              p {
                margin-bottom: 20px;
                width: 100%;
              }
            }
            @media (max-width: 768px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          {government.map((item) => (
            <AtomText
              as="p"
              width="523px"
              cursor="text"
              fontSize="17px"
              key={item}
            >
              {item}
            </AtomText>
          ))}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={css`
          display: flex;
          align-items: center;
          margin: 100px 0;
          @media (min-width: 1024px) {
            width: 1230px;
          }
        `}
      >
       <PageDiagramBox disabled>
          <AtomText
            as="h1"
            fontSize="22px"
            fontWeight={600}
            customCSS={css`
              text-align: center;
            `}
          >
            Asamblea / Asociados ABM
          </AtomText>
        </PageDiagramBox>
        <DiagramLine height="60px" width="1px" />
        <AtomWrapper
          width="1034px"
          customCSS={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
            width: 100%;
            @media (max-width: 768px) {
              flex-direction: column;
              align-items: center;
              padding: 0 100px;
            }
            @media (max-width: 768px) {
              padding: 0;
            }
          `}
        >
          {cardsABM.map((card, index) => (
            <>
              <Card key={card.title} {...card} />
              {index === cardsABM.length - 1 ? null : (
                   <DiagramLine height="auto" width="50%" margin="40px 0" />
              )}
            </>
          ))}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        flexDirection="row"
        flexWrap="wrap"
        customCSS={css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        {graphics2.map((card) => (
          <AtomImage
            key={card}
            src={card}
            width="700px"
            alt={card}
            customCSS={css`
              @media (max-width: 1414px) {
                width: 50%;
              }
              @media (max-width: 768px) {
                width: 100%;
              }
            `}
          />
        ))}
      </AtomWrapper>
      <AtomWrapper
        flexDirection="row-reverse"
        customCSS={css`
          display: flex;
          margin: 100px 0;
          width: 100%;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        `}
      >
        <AtomWrapper
          width="480px"
          customCSS={css`
            @media (min-width: 1510px) {
              width: 550px;
            }
          `}
        >
          <AtomText as="h1" width="481px" fontSize="32px" fontWeight="bold">
            Estrategia de Procuraci??n de Fondos y Comunicaci??n
          </AtomText>
          {phrases.map((phrase) => (
            <AtomText as="p" fontSize="16px" key={phrase} margin="10px 0">
              {phrase}
            </AtomText>
          ))}
        </AtomWrapper>
        <AtomWrapper
          width="500px"
          customCSS={css`
            @media (min-width: 1230px) {
              width: 700px;
            }
          `}
        >
          <OrganismsSlider previews={1}>
            {sliders.map((item) => (
              <AtomWrapper key={item.image} alignItems="center">
                <AtomImage
                  src={item.image}
                  key={item.image}
                  alt="graphic"
                  width="504px"
                  height="451px"
                  customCSS={css`
                    @media (min-width: 1024px) {
                      margin: 0;
                      width: 100%;
                      height: auto;
                    }
                  `}
                />
                <AtomWrapper
                  backgroundColor="#DE2D6E"
                  alignItems="flex-end"
                  padding="5px"
                  borderRadius="0 0 10px 10px"
                  width="97.5%"
                  customCSS={css`
                    position: absolute;
                    bottom: 0;
                  `}
                >
                  <AtomText as="h1" color="white" fontWeight="bold">
                    {item.text}
                  </AtomText>
                </AtomWrapper>
              </AtomWrapper>
            ))}
          </OrganismsSlider>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  </AtomWrapper>
);

//https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/invertimosschema.png

const graphics2 = [
  'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/fuentesdefinanciamiento.png',
  'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/distribucionderecursos.png'
];

const sliders = [
  {
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/estrategiasdeprocuracondefondosycomunicacion.png',
    text: 'Concurso de Dibujo'
  },
  {
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/Ni%C3%B1os%20y%20Adolescentes%20en%20Armon%C3%ADa%402x.png',
    text: 'Voluntariado Bancario'
  },
  {
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/8%402x.png',
    text: 'Seminarios ABM'
  },
  {
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/Stand2%402x.png',
    text: 'Convenci??n Bancaria'
  }
];

const government = [
  'La Asamblea de Asociados de la ABM es nuestro m??ximo ??rgano de gobierno; est?? integrada por los bancos asociados mediante sus dos figuras representativas: la patrimonial y la gremial. Ambas figuras est??n facultadas para elegir al presidente, consejeros y miembros expertos del Comit?? de Direcci??n; designar al Director General; aprobar el informe anual, estados financieros y cualquier deliberaci??n de la gesti??n; as?? como la revocaci??n y otorgamiento de poderes.',
  'La Asamblea delega en el Comit?? de Direcci??n, el Consejo Consultivo y el Comit?? de Finanzas, todos ellos bajo la gu??a y coordinaci??n de la Direcci??n General, la gesti??n y control de las principales acciones sociales, econ??micas y operativas de la Fundaci??n; adem??s, forma parte del Comit?? de Inversiones de la ABM.'
];

const cardsABM = [
  {
    title: 'Comit?? de Direcci??n',
    list: [
      'Deliberar y aprobar la direcci??n estrat??gica y el modelo de intervenci??n',
      'Revisar de manera regular y actualizar la misi??n, objetivos y el plan estrategico en relaci??n con las pol??ticas y en total cumplimiento de la legislaci??n',
      'Nombrar y cambiar la denominaci??n e integraci??n de los Comit??s'
    ]
  },
  {
    title: 'Consejo Consultivo',
    list: [
      'Fomentar la participaci??n de las instituciones financieras, organismos p??blicos y privados y la comunidad en general, en las actividades y proyectos de la Fundaci??n',
      'Colaborar en la elaboraci??n del programa de trabajo anual de la Fundaci??n',
      'Emitir su opini??n con respecto a la integraci??n y operaci??n de los comit??s de trabajo'
    ]
  },
  {
    title: 'Comit?? de Finanzas',
    list: [
      'Elaborar y supervirsar la estrategia financiaera de la Fundaci??n y orientar la toma de desici??nes',
      'Apoyar el proceso de auditor??a anual. La administraci??n de los recursos es audita por un despacho internacional externo, para asegurar la veracidad y transparencia de l a informaci??n'
    ]
  }
];

const phrases = [
  'Nuestra gesti??n operativa consolida todas las acciones administrativas, legales y de comunicaci??n que desarrollamos como fundaci??n, para funcionar y cumplir con nuestro objetivo social; muchas veces, estas acciones no son visibles a todos nuestros grupos de inter??s, sin embargo, son clave para nuestra sostenibilidad. Por medio de este reporte de forma transparente informamos sobre nuestras actividades, la procuraci??n de fondos y la incidencia social.',
  'Desde el ??rea de Comunicaci??n y Procuraci??n se busca contribuir al posicionamiento de nuestra labor como fortalecedores de nuestras IFQs y el tercer sector por medio de la difusi??n del quehacer institucional, la procuraci??n eficiente de recursos y la visibilizaci??n de la problem??tica de los menores en situaci??n o riesgo de calle.'
];
export default Gestion;
