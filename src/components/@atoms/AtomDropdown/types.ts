import { AtomLinkProps } from '@sweetsyui/ui/build/@atoms/AtomLink/types';
import { AtomContainerTypes } from '@sweetsyui/ui/build/@atoms/AtomContainer/types';
import { AtomTextTypes } from '@sweetsyui/ui/build/@atoms/AtomText/types';

interface SubField {
  type?: string;
  direction?: string;
  label?: string;
  link?: string;
  subFields?: Link[];
}

export interface Link {
  id?: string;
  type?: string;
  direction?: string;
  label?: string;
  link?: string;
  subFields?: SubField[];
}

export interface RecursiveDropdownHook {
  data?: Link[];
  recursive?: boolean;
  componentsProps?: {
    containerProps?: AtomContainerTypes;
    textProps?: AtomTextTypes;
    AtomLinkProps?: AtomLinkProps;
  };
}
