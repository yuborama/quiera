import { css } from '@emotion/react';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomMap,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { useEffect, useState } from 'react';
import ButtonHelp from './modelo-de-inversion-social/components/ButtonHelp';
import { filterActive } from '../assets/dataMap';
import Image from 'next/image'

const CardsGraphics = [
  {
    title: `Fortalecimos`,
    description: `las vidas y las posibilidades de inclusión de 19,404 niños y jóvenes en riesgo o en situación de calle y facilitamos herramientas y recursos para que 1,149 colaboradores puedan seguir apoyando su desarrollo integral.`,
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/fortalecimosgrapich.png'
  },
  {
    title: `Apoyamos`,
    description: `la reactivación social de México con una inversión equitativa, diversa y trascendente.`,
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/ApoyamosGraphic.png'
  }
];

const ObjetivesQuiera = [
  {
    title: 'Alianzas para lograr los Objetivos',
    color: '#2B415F',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/flower.svg',
    list: [
      {
        title: 'META',
        list: [
          {
            serial: '17.17',
            description:
              '1,712 colaboradores puedan seguir apoyando su desarrollo integral.'
          },
          {
            serial: '17.9',
            description: 'Aumentar el apoyo Internacional'
          },
          {
            serial: '17.3',
            description: 'Movilizar recursos financieros'
          }
        ]
      },
      {
        title: 'RESULTADO',
        list: [
          {
            serial: '17.17',
            description:
              '83 aliados entre voluntarios, donadores privados y otras fundaciones que apoyaron los programas sociales del 2021.'
          },
          {
            serial: '17.9',
            description: '50 proyectos co-financiados para nuestras IFQs'
          },
          {
            serial: '17.3',
            description: '$33.7 millones de procurados en 2021'
          }
        ]
      }
    ]
  },
  {
    title: 'Paz, Justicia e Instituciones Sólidas',
    color: '#386493',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/dove.svg',
    list: [
      {
        title: 'META',
        list: [
          {
            serial: '16.2',
            description:
              'Poner fin al maltrato, La Explotación, La trata y todas las formas de violencia y tortura contra los niños'
          }
        ]
      },
      {
        title: 'RESULTADO',
        list: [
          {
            serial: '',
            description:
              '19,404 niños y jóvenes beneficiados a través de la red de IFQs en todo el país'
          }
        ]
      }
    ]
  },
  {
    title: 'Educación de Calidad',
    color: '#AD2A38',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/book.svg',
    list: [
      {
        title: 'META',
        list: [
          {
            serial: '3.4',
            description:
              'De aquí a 2030, eliminar las disparidades de género en la educación y asegurar el acceso igualitario a todos los niveles de la enseñanza y la formación profesional para las personas vulnerables, incluidas las personas con discapacidad, los pueblos indígenas y los niños en situaciones de vulnerabilidad'
          }
        ]
      },
      {
        title: 'RESULTADO',
        list: [
          {
            serial: '',
            description:
              'Ocho áreas de Educación fueron creadas y sistematizadas para facilitar el acceso de los menores a la enseñanza'
          }
        ]
      }
    ]
  },
  {
    title: 'Salud y Bienestar',
    color: '#4C963D',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/heart-beat.svg',
    list: [
      {
        title: 'META',
        list: [
          {
            serial: '3.4',
            description:
              'Para 2030, reducir en un tercio la mortalidad prematura por enfermedades no transmisibles mediante la prevención y el tratamiento y promover la salud mental y el bienestar'
          }
        ]
      },
      {
        title: 'RESULTADO',
        list: [
          {
            serial: '',
            description:
              'Seis áreas de Salud Mental fueron creadas y sistematizadas para promover y cuidar de la salud mental de menores y colaboradores de las IFQs'
          }
        ]
      }
    ]
  }
];

const Dinamizamos = [
  'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/4k%20tables/aliados.png',
  'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/4k%20tables/formacion.png',
  'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/4k%20tables/comunication.png'
];

export const CardsArticles = ({
  card,
  index,
  children,
  click
}: {
  card: {
    title: string;
    image: string;
    description: string;
    footer?: string;
  };
  index: number;
  children?: React.ReactNode;
  click?: () => void;
}) => {
  return (
    <AtomWrapper
      key={index}
      customCSS={css`
        display: flex;
        flex-direction: ${index === 1 ? 'row-reverse' : 'row'};
        align-items: center;
        justify-content: space-around;
        @media (max-width: 768px) {
          flex-direction: column;
          width: 100%;
        }
      `}
    >
      <AtomButton
        backgroundColor="transparent"
        onClick={click}
        width="auto"
        height="auto"
        padding="0"
        margin="0"
      >
        <AtomImage
          alt={card?.title}
          src={card?.image}
          width="550px"
          customCSS={css`
            @media (max-width: 768px) {
              width: 100%;
              height: 100%;
            }
          `}
        />
      </AtomButton>
      <AtomWrapper
        width="36%"
        customCSS={css`
          @media (max-width: 768px) {
            width: 100%;
            align-items: center;
          }
        `}
      >
        <AtomText
          as="h1"
          fontSize="32px"
          fontWeight="bold"
          width="457px"
          color="#DE2D6E"
          margin="10px 0"
          customCSS={css`
            @media (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          `}
        >
          {card?.title}
        </AtomText>
        <AtomText
          as="p"
          fontSize="17px"
          fontWeight={500}
          width="489px"
          margin="0 0 20px 0"
          customCSS={css`
            @media (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          `}
        >
          {card?.description}
        </AtomText>
        {children}
        {card?.footer && (
          <AtomText
            as="p"
            fontSize="17px"
            width="489px"
            customCSS={css`
              font: italic normal 300 16px/22px Montserrat;
            `}
          >
            {card?.footer}
          </AtomText>
        )}
      </AtomWrapper>
    </AtomWrapper>
  );
};

const PhraseCint = ({
  props
}: {
  props: {
    outItalic?: string;
    title?: string;
    text?: string;
    children?: React.ReactNode;
  };
}) => (
  <AtomWrapper
    backgroundColor="#DE2D6E"
    padding="50px 150px"
    margin="75px 0"
    customCSS={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      @media (max-width: 1440px) {
        padding: 100px 0;
      }
      @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
      }
    `}
  >
    <AtomText
      as="h1"
      color="white"
      fontSize="32px"
      fontWeight="bold"
      align="center"
    >
      {props.title}
    </AtomText>
    {props.text ? (
      <AtomText
        as="p"
        color="white"
        width="76%"
        customCSS={css`
          text-align: center;
          font: italic normal 500 22px/31px Montserrat;
        `}
      >
        {props.text}
      </AtomText>
    ) : (
      <AtomText
        as="p"
        color="white"
        width="76%"
        customCSS={css`
          text-align: center;
          font: italic normal 500 22px/31px Montserrat;
        `}
      >
        Reactivamos al sector social ante la pandemia por COVID-19, con una
        inversión directa y abierta para que nuestras IFQs pudieran utilizar los
        recursos de acuerdo con sus necesidades y según el nivel de
        vulnerabilidad, determinado en la segunda medición de{' '}
        <strong style={{ font: 'normal 600 22px/31px Montserrat' }}>
          Pulso OSC.
        </strong>
      </AtomText>
    )}
    {props.children}
  </AtomWrapper>
);
export const Public = () => {
  const [screenWidth, setscreenWidth] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(false);
  const [urlPreview, setUrlPreview] = useState<string>('');

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
      {display && (
        <AtomWrapper
          alignItems="center"
          customCSS={css`
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 100vh;
            position: fixed;
            z-index: 101;
            top: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0.75;
            padding: 10px;
          `}
        >
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            width="auto"
            customCSS={css`
              @media (max-width: 768px) {
                flex-wrap: nowrap;
                transform: rotate(90deg) scale(1.5);
              }
            `}
          >
            <AtomImage
              width="auto"
              height="500px"
              src={urlPreview}
              alt="preview"
              customCSS={css`
                @media (max-width: 768px) {
                  width: 100%;
                  height: 100%;
                }
              `}
            />
            <AtomButton
              width="auto"
              backgroundColor="transparent"
              onClick={() => {
                setDisplay(false);
              }}
            >
              <AtomIcon
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/icons/cancel.svg"
                color="white"
              />
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      )}
      <AtomWrapper
        customCSS={css`
          font-family: Montserrat;
        `}
      >
        <AtomWrapper>
          <AtomWrapper
            customCSS={css`
              display: flex;
              width: 100%;
              padding: 100px 0;
              align-items: center;
              justify-content: space-around;
              flex-direction: row;
              @media (max-width: 768px) {
                width: 100%;
                padding: 20px;
                flex-direction: column;
              }
            `}
          >
            <AtomImage
              src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/qusota.png"
              alt="image"
              width="445px"
              customCSS={css`
                transition: all 0.5s;
                cursor: pointer;
                background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/nina-q.png');
                :hover {
                  transition: all 0.5s;

                  background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/105-5V2A3796%402x.png');
                }
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 97% 97%;
                @media (max-width: 768px) {
                  width: 100%;
                  height: 100%;
                }
              `}
            />
            <AtomWrapper width="500px">
              <AtomText as="h1" fontSize="36px" fontWeight="bold" width="457px">
                Informe Anual de Sustentabilidad 2021
              </AtomText>
              <AtomText
                as="h1"
                fontSize="26px"
                fontWeight="normal"
                // width="457px"
              >
                Fortalecimiento para la Reactivación Social
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
          <PhraseCint
            props={{
              text: 'Somos una Institución mexicana donante, sin fines de lucro. Otorgamos recursos desde octubre de 1993 a OSC especializadas en la atención de niños y jóvenes en situación o riesgos de calle para restituir sus derechos, mejorar su calidad de vida y alcanzar su desarrollo integral.'
            }}
          />
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            customCSS={css`
              position: relative;
            `}
          >
            <AtomWrapper width="auto" padding="20px">
              <AtomText
                as="p"
                fontSize="18px"
                fontWeight="normal"
                width="457px"
              >
                A nivel nacional nuestra red de 52 Instituciones Fortalecidas
                por Quiera (IFQs) nos permitió llegar a 21,116 personas en 18
                estados con más de $29.2 millones de inversión social{' '}
              </AtomText> 
              <AtomWrapper
                flexWrap="wrap"
                flexDirection="row"
                customCSS={css`
                  width: 510px;
                  background: #ffffff 0% 0% no-repeat padding-box;
                  box-shadow: 0px 3px 6px #00000029;
                  border-radius: 10px;
                  opacity: 1;
                  overflow: scroll;
                  overflow-x: hidden;
                  justify-content: space-around;
                  height: 400px;
                `}
              >
                <AtomWrapper
                  flexDirection="row"
                  justifyContent="space-around"
                  customCSS={css`
                    width: 500px;
                    height: 40px;
                    background: white;
                    padding: 10px;
                    position: absolute;
                    z-index: 1;
                    top: 122px;
                    @media (max-width: 768px) {
                      width: 460px;
                    }
                    @media (max-width: 576px) {
                      width: 445px;
                    }
                    @media (max-width: 480px) {
                      width: 400px;
                    }
                    @media (max-width: 375px) {
                      width: 300px;
                    }
                  `}
                >
                  <AtomText as="h2" fontSize="12px" fontWeight="bold">
                    Estados
                  </AtomText>
                  <AtomText
                    as="h2"
                    fontSize="12px"
                    fontWeight="bold"
                    margin="0 0 0 120px"
                  >
                    No. IFQs
                  </AtomText>
                  <AtomText
                    as="h2"
                    fontSize="12px"
                    fontWeight="bold"
                    margin="0 0 0  30px"
                  >
                    Inversión
                  </AtomText>
                  <AtomText as="h2" fontSize="12px" fontWeight="bold">
                    Beneficiarios
                  </AtomText>
                </AtomWrapper>
                {listEstados.map((estado, index) => (
                  <AtomWrapper
                    width="auto"
                    margin="50px 0 0 0"
                    key={estado.title}
                    customCSS={css`
                      display: flex;
                      justify-content: space-between;
                    `}
                  >
                    <AtomWrapper width="auto" justifyContent="space-around">
                      {estado.items.map((item, index) => (
                        <>
                          <AtomText
                            margin="10px 0"
                            as="p"
                            fontSize="14px"
                            fontWeight={
                              estado.title === 'Estados' ? 'bold' : 'normal'
                            }
                            key={item}
                            width="auto"
                            customCSS={css`
                              display: flex;
                              align-items: center;
                              height: 23px;
                            `}
                          >
                            {estado.title === 'Estados' && (
                              <AtomWrapper
                                backgroundColor="#DE2D6E"
                                customCSS={css`
                                  width: 10px;
                                  height: 10px;
                                  border-radius: 50%;
                                  margin-right: 10px;
                                `}
                              >
                              </AtomWrapper>
                            )}
                            {item}
                          </AtomText>
                        </>
                      ))}
                    </AtomWrapper>
                  </AtomWrapper>
                ))}
                <AtomWrapper padding="10px">
                  <AtomText
                    as="p"
                    fontSize="14px"
                    customCSS={css`
                      /* opacity: 0.5; */
                    `}
                  >
                    Una IFQ tiene presencia en dos estados: CDMX y Tlaxcala. 286
                    personas beneficiadas con capacitación de la red de IFWs,
                    para lo cual se invirtió $138,654
                  </AtomText>
                </AtomWrapper>
              </AtomWrapper>
            </AtomWrapper>
            <AtomWrapper
              width="450px"
              customCSS={css`
                @media (min-width: 1125px) {
                  width: 700px;
                }
                @media (max-width: 1025px) {
                  width: 600px;
                }
              `}
            >
              <AtomMap
                place="mx"
                width="100%"
                customCSS={css`
                  background-color: #af1e1e;
                  border-radius: 10px;
                `}
                hover="#DE2D6E"
                data={filterActive(screenWidth)}
              />
            </AtomWrapper>
          </AtomWrapper>
          <AtomWrapper
            padding="100px 0"
            customCSS={css`
              @media (max-width: 768px) {
                padding: 20px;
              }
            `}
          >
            {CardsGraphics.map((card, index) => (
              <CardsArticles
                key={index}
                card={card}
                index={index}
                click={() => (
                  setDisplay(!display),
                  setUrlPreview(
                    card.title === 'Apoyamos'
                      ? 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/graphic4k.png'
                      : card.image
                  )
                )}
              />
            ))}
          </AtomWrapper>
          <AtomWrapper>
            <AtomWrapper
              customCSS={css`
                display: flex;
                align-items: center;
                justify-content: space-around;
                @media (max-width: 768px) {
                  padding: 20px;
                }
              `}
            >
              <AtomText
                as="h1"
                fontSize="32px"
                fontWeight="bold"
                color="#DE2D6E"
                customCSS={css`
                  text-align: center;
                `}
              >
                Impulsamos al tercer sector en el país
              </AtomText>
              <AtomText
                width="80%"
                fontSize="18px"
                as="p"
                customCSS={css`
                  font: italic 500 18px/27px Montserrat !important;
                  text-align: center;
                `}
              >
                Porque es la base para lograr un desarrollo inclusivo y
                sostenible de la sociedad. Nuestras estrategias se alinean con
                los Objetivos de Desarrollo Sostenible y la Agenda 2030 que a
                nivel mundial se han trazado a fin de reducir las brechas de
                desigualdad que enfrentan la niñez y juventud en situación o
                riesgo de calle; además, generamos conocimientos para detonar un
                desarrollo más acelerado de las organizaciones sociales en
                México.
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
          <AtomWrapper
            padding="100px 200px"
            customCSS={css`
              padding: 20px;
            `}
          >
            {ObjetivesQuiera.map((obj) => (
              <AtomWrapper
                margin="50px 0"
                key={obj.title}
                customCSS={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  flex-wrap: wrap;
                  @media (max-width: 768px) {
                    width: 100%;
                    padding: 20px;
                  }
                `}
              >
                <AtomWrapper
                  width="auto"
                  customCSS={css`
                    @media (max-width: 1024px) {
                      width: 350px;
                    }
                  `}
                >
                  <AtomIcon
                    icon={obj.icon}
                    color={obj.color}
                    width="82px"
                    height="82px"
                    customCSS={css`
                      svg {
                        path {
                          fill: white !important;
                        }
                      }
                    `}
                  />
                  <AtomText
                    as="h1"
                    fontSize="26px"
                    fontWeight="bold"
                    width="372px"
                    color="black"
                    customCSS={css`
                      @media (max-width: 768px) {
                        text-align: center;
                      }
                    `}
                  >
                    {obj.title}
                  </AtomText>
                </AtomWrapper>
                {obj.list.map((item) => (
                  <AtomWrapper
                    margin=" 10px"
                    key={item.title}
                    customCSS={css`
                      width: 412px;
                      height: 258px;
                      display: flex;
                      justify-content: flex-start;
                      background: #ffffff 0% 0% no-repeat padding-box;
                      box-shadow: 0px 3px 6px #00000029;
                      border-radius: 10px;
                      opacity: 1;
                      @media (max-width: 1328px) {
                        width: 290px;
                        height: 310px;
                      }
                      @media (max-width: 768px) {
                        height: 100%;
                      }
                    `}
                  >
                    <AtomWrapper
                      customCSS={css`
                        padding: 20px;
                        background-color: ${obj.color};
                        border-radius: 10px 10px 0 0;
                      `}
                      height="46px"
                    >
                      <AtomText
                        as="h4"
                        fontWeight="bold"
                        color="white"
                        fontSize="18px"
                        align="center"
                      >
                        {item.title}
                      </AtomText>
                    </AtomWrapper>
                    <AtomWrapper padding="20px">
                      {item.list.map((item) => (
                        <AtomText
                          as="p"
                          key={item.serial}
                          margin="10px 0"
                          customCSS={css`
                            display: flex;
                            flex-direction: row;
                          `}
                        >
                          {' '}
                          <AtomText
                            as="h5"
                            fontWeight="bold"
                            color="#DE2D6E"
                            margin="0 5px"
                          >
                            {item.serial}
                          </AtomText>
                          {item.description}
                        </AtomText>
                      ))}
                    </AtomWrapper>
                  </AtomWrapper>
                ))}
              </AtomWrapper>
            ))}
          </AtomWrapper>
          <AtomWrapper padding="100px 0" alignItems="center" customCSS={css``}>
            <AtomText
              as="h1"
              color="#DE2D6E"
              fontSize="32px"
              fontWeight="bold"
              customCSS={css`
                @media (max-width: 768px) {
                  text-align: center;
                }
              `}
            >
              Dinamizamos sinergias
            </AtomText>
            <AtomText
              as="p"
              align="center"
              fontSize="16px"
              width="66%"
              customCSS={css`
                @media (max-width: 768px) {
                  text-align: center;
                  width: 100%;
                }
              `}
            >
              Dinamizamos sinergias a través de aliados que nos permiten
              multiplicar los esfuerzos y la inversión, con formación para
              fortalecer la capacidad institucional de nuestras IFQs y con
              comunicación para retroalimentar y mejorar de forma continua
              nuestro modelo de inversión social.
            </AtomText>
            <AtomWrapper
              flexDirection="row"
              justifyContent="center"
              flexWrap="wrap"
            >
              {Dinamizamos.map((item, index) => (
                <AtomImage
                  key={item}
                  src={item}
                  alt={item}
                  width="auto"
                  height="auto"
                  margin="0 20px"
                  customCSS={css`
                    img {
                      /* width: ${index === 1 ? '410px' : '296px'}; */
                      height: 496px;
                    }
                  `}
                  objectPosition="top"
                />
              ))}
            </AtomWrapper>
          </AtomWrapper>
          <PhraseCint props={{}} />
          <AtomWrapper
            padding="100px 0"
            customCSS={css`
              @media (max-width: 768px) {
                padding: 20px;
              }
            `}
          >
            {CardsArticles2.filter((_, index) => index < 1).map((card) => (
              <CardsArticles
                key={card.title}
                {...{
                  card,
                  index: 1,
                  click: () => {
                    setDisplay(!display);
                    setUrlPreview(card.image);
                  }
                }}
              />
            ))}
          </AtomWrapper>
          <PhraseCint
            props={{
              title: 'Tras 28 años de operación',
              text: 'estos son algunos de los resultados que demuestran el impacto de nuestra visión de fortalecimiento de vidas.',
              children: (
                <AtomWrapper
                  customCSS={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                  `}
                >
                  {CintChildren.map((card) => (
                    <AtomWrapper
                      width="350px"
                      height="220px"
                      margin="10px"
                      key={card.numbers}
                      customCSS={css`
                        background: #ffffff 0% 0% no-repeat padding-box;
                        box-shadow: 0px 3px 6px #00000029;
                        border-radius: 10px;
                        opacity: 1;
                        padding: 20px;
                        @media (max-width: 1440px) {
                          width: 300px;
                        }
                        @media (max-width: 768px) {
                          width: 100%;
                          margin: 20px 0;
                        }
                      `}
                    >
                      <AtomText
                        as="h2"
                        fontSize="36px"
                        fontWeight="bold"
                        color="#DE2D6E"
                      >
                        {card.numbers}
                      </AtomText>
                      <AtomText as="p" fontSize="18px" fontWeight="normal">
                        {card.text}
                      </AtomText>
                    </AtomWrapper>
                  ))}
                </AtomWrapper>
              )
            }}
          />
          <AtomWrapper
            padding="100px 0"
            customCSS={css`
              @media (max-width: 768px) {
                padding: 20px;
              }
            `}
          >
            {CardsArticles2.filter((_, index) => index === 1).map((card) => (
              <CardsArticles
                key={card.title}
                {...{
                  card,
                  index: 0,

                  children: <ButtonHelp />
                }}
              />
            ))}
          </AtomWrapper>
        </AtomWrapper>{' '}
      </AtomWrapper>
    </>
  );
};

export default Public

const CintChildren = [
  {
    numbers: '360,441',
    text: 'Niños, jóvenes y colaboradores de IFQs beneficiados'
  },
  {
    numbers: '122',
    text: 'Instituciones financiadas y fortalecidas'
  },
  {
    numbers: '$481 MDP',
    text: 'Inversión social'
  },
  {
    numbers: '1,169',
    text: 'Proyecto cofinanciados'
  }
];

const listEstados = [
  {
    title: 'Estados',
    items: [
      'Baja California',
      'Chiapas',
      'Chihuahua',
      'Ciudad de México',
      'Coahuila',
      'Guanajuato',
      'Jalisco',
      'Estado de México',
      'Michoacán',
      'Nuevo León',
      'Oaxaca',
      'Puebla',
      'Querétaro',
      'Quintana Roo',
      'Sinaloa',
      'Sonora',
      'Veracruz'
    ]
  },
  {
    title: 'IFQs',
    items: [4, 1, 2, 20, 2, 1, 6, 1, 1, 4, 2, 2, 2, 1, 1, 2, 1]
  },
  {
    title: 'Inversión',
    items: [
      '$1,741,692',
      '$602,650',
      '$736,416',
      '$11,816,932',
      '$940,971',
      '$745,170',
      '$3,782,640',
      '$142,393',
      '$563,918',
      '$1,973,409',
      '$858,920',
      '$1,440,227',
      '$1,300,625',
      '$556,733',
      '$449,301',
      '$999,995',
      '$501,402'
    ]
  },
  {
    title: 'Beneficiarios',
    items: [
      '1,784',
      '175',
      '1,127',
      '5,603',
      '177',
      '119',
      '1,127',
      '35',
      '269',
      '2,755',
      '195',
      '245',
      '194',
      '2,607',
      '2,335',
      '2,037',
      '46'
    ]
  }
];

const CardsArticles2 = [
  {
    title: '$3,275,000 invertidos',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/inversiongraphic.png',
    footer: '*Incluidos en la sumatoria anual de 21,116 beneficiarios.',
    description: 'en 50 apoyos extraordinarios para nuestra red de IFQs.'
  },
  {
    title: 'Apoyanos para seguir fortaleciendo',
    image:
      'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/bottom-image.jpg',
    description:
      'Descubre y súmate a las diversas iniciativas con las que puedes colaborar.'
  }
];
