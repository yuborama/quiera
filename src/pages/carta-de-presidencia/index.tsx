import { css } from '@emotion/react';
import { AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { FC } from 'react';
import Image from 'next/image'
const CartaDePresidencia: FC = () => {
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
          padding: 100px;
          justify-content: space-between;
          flex-direction: row;
          @media (max-width: 768px) {
            align-items: center;
            width: 100%;
            padding: 20px;
            align-items: center;
            flex-direction: column-reverse;
          }
        `}
      >
        <AtomWrapper
          width="440px"
          alignItems="center"
          customCSS={css`
            @media (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <AtomText as="h1" width="auto" fontWeight="bold" fontSize="36px">
            Carta de la Presidencia
          </AtomText>
          {pharagraphs.map((pharagraph, index) => (
            <>
              {index !== 4 ? (
                <AtomText
                  key={pharagraph}
                  width="auto"
                  margin="10px 0"
                  fontSize="17px"
                  as="p"
                >
                  {pharagraph}
                </AtomText>
              ) : (
                <AtomText
                  key={pharagraph}
                  width="auto"
                  margin="10px 0"
                  fontSize="17px"
                  as="p"
                >
                  Generamos alianzas para multiplicar el impacto de nuestras
                  acciones y dar un valor agregado a toda nuestra red de IFQs y
                  en general a todo el tercer sector; bajo esta premisa
                  participamos en 6 eventos de OSCs y 36 entrevistas en medios
                  masivos de comunicación; estas participaciones visibilizan
                  nuestra labor, las brechas de desigualdad que enfrentan la
                  niñez y juventud en situación o riesgo de calle, y nos
                  permiten{' '}
                  <strong>
                    co-construir soluciones para la transformación social
                  </strong>
                  , temática central de nuestro Congreso Virtual Quiera, el cual
                  se consolida como un espacio de reflexión y vinculación, que
                  este año contó con 283 participantes de México y
                  Latinoamérica.
                </AtomText>
              )}
            </>
          ))}
          <AtomImage
            src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/presidentfirm-PhotoRoom.png"
            alt="FirmPresident"
            width="267px"
            height="190px"
            customCSS={css`
              background-color: transparent;

              @media (max-width: 768px) {
                width: auto;
                height: auto;
              }
            `}
          />
          <AtomText as="h4" fontSize="16px" fontWeight="bold">
            Janina Furszyfer de Becker
          </AtomText>
          <AtomText>Presidenta de Fundación Quiera</AtomText>
        </AtomWrapper>
        <AtomImage
          src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/QRA-0001/images/cartadelapresidencia.png"
          alt="president"
          width="400px"
          height="auto"
          customCSS={css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            right: 50px;
            top: 200px;
            @media (min-width: 1124px) {
              width: 500px;
              right: 120px;
            }
            @media (max-width: 768px) {
              width: 100%;
            }
            @media (max-width: 992px) {
              /* width: 300px; */
              position: static;
            }
          `}
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};
const pharagraphs = [
  'Después de un año de muchos retos, en el 2021 buscamos aprovechar los aprendizajes y las sinergias que nos dejaron los cambios sociales y económicos derivados de la pandemia para reactivar y fortalecer alianzas capaces de generar herramientas, recursos, espacios y programas que impacten positivamente en la vida de niños y jóvenes en riesgo o situación de calle, y que su vez consoliden e impulsen nuestro propio desarrollo institucional, el de nuestras 52 IFQs y el del tercer sector en México.',
  'La reestructura interna que emprendimos en 2020 bajo el lineamiento de volver a nuestros inicios –legado de mi predecesora– continuó progresando durante el 2021 y se materializó en una renovada convocatoria anual y una actualizada metodología de evaluación de la inversión social –herramientas esenciales para la cofinanciación y acompañamiento de nuestra red de IFQs– que a su vez buscan poner en el centro de nuestras acciones, las necesidades de las instituciones.',
  'Co-creamos un plan de desarrollo institucional para cada IFQ con la finalidad de guiar y financiar acciones que les permitan generar mayor impacto con su esquema de atención. En 2021 cofinanciamos proyectos de fortalecimiento y capacitaciones con $29.2 millones, los cuales beneficiaron a 19,404 niños y jóvenes e impactaron a 1,149 colaboradores de la red, quienes además recibieron diversas capacitaciones.',
  'Además de los fondos otorgados por la convocatoria, este año asignamos apoyos extraordinarios para que nuestra red de IFQs invirtiera libremente en el equipo y las acciones necesarias para superar la contingencia derivada de la pandemia por COVID-19. Esto en alineación a los resultados del segundo diagnóstico realizado por Pulso OSC sobre la situación del tercer sector en México ante la pandemia; cabe destacar que en este estudio participaron todas nuestras IFQs.',
  'Generamos alianzas para multiplicar el impacto de nuestras acciones y dar un valor agregado a toda nuestra red de IFQs y en general a todo el tercer sector; bajo esta premisa participamos en 6 eventos de OSCs y 36 entrevistas en medios masivos de comunicación; estas participaciones visibilizan nuestra labor, las brechas de desigualdad que enfrentan la niñez y juventud en situación o riesgo de calle, y nos permiten co-construir soluciones para la transformación social, temática central de nuestro Congreso Virtual Quiera, el cual se consolida como un espacio de reflexión y vinculación, que este año contó con 283 participantes de México y Latinoamérica.',
  'El fortalecimiento institucional permite que las organizaciones profesionalicen su labor social. Este principio no solo aplica para nuestras IFQs sino también, al interior de Quiera, por ello, en 2021 se generaron más de 810 horas de formación para todo el personal, con el fin de desarrollar sus habilidades. Además, realizamos un segundo estudio de materialidad con la participación de todos nuestros grupos de interés, que hoy nos permite comunicar nuestros logros y retos en torno a nuestra sustentabilidad. Además, empezamos un diagnóstico del gobierno interno de la Fundación para implementar acciones que permitan aprovechar mejor sus fortalezas y adaptarnos a nuevos lineamientos legales; dichas acciones se implementarán en 2022. En conjunto, todas estas acciones nos permiten fortalecer nuestra gestión operativa y el impacto de nuestro modelo de inversión social.',
  'Este es mi primer año como presidenta de Fundación Quiera, pero he participado por más de 9 años, acompañando el crecimiento de la Fundación. Hoy me emociona aportar desde mi experiencia e invitarlos a estrechar lazos que nos permitan generar más oportunidades de desarrollo e inclusión para todos los niños y jóvenes vulnerables de nuestro país; los años por venir, seguirán presentando retos y nos exigirán repensar y fortalecer los cimientos de cada uno de nosotros y nuestro papel en la sociedad.',
  'Cierro esta introducción con nuestro reporte de resultados, agradeciendo a todos los que han hecho posible apoyar a más de 360 mil beneficiarios en estos primeros 28 años de labor social; mi más profundo agradecimiento a nuestros colaboradores, consejeros y a la Asociación de Bancos de México, que nos constituye con sus 49 instituciones financieras aliadas. Todos y cada uno de ustedes nos impulsan a dar lo mejor por la infancia de nuestro país. '
];
export default CartaDePresidencia;
