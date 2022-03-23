import { FC } from 'react';
import StylesGlobal from '@sweetsyui/ui/build/@styles/stylesglobal';
import Fonts from './_fonts';

const GlobalStyles: FC = () => (
  <>
    <StylesGlobal scrollbarColor="#f1576c" />
    <Fonts />
  </>
);

export default GlobalStyles;
