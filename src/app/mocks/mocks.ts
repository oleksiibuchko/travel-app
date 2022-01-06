import { INavItem } from '../shared/interfaces/nav-item.interface';
import { IFormControl } from '../shared/interfaces/radio-button.interface';
import { ILink } from '../shared/interfaces/link.interface';

export const headerNavItems: INavItem[] = [
  {
    link: '#',
    title: 'Topic 1'
  },
  {
    link: '#',
    title: 'Topic 2'
  },
  {
    link: '#',
    title: 'Topic 3'
  },
  {
    link: '#',
    title: 'Topic 4'
  }
];

export const navItems: INavItem[] = [
  {
    link: '#',
    title: 'Section 1'
  },
  {
    link: '#',
    title: 'Section 2'
  },
  {
    link: '#',
    title: 'Section 3'
  },
  {
    link: '#',
    title: 'Section 4'
  }
];

export const sideBarNavItems: INavItem[] = [
  {
    link: '#',
    title: 'Section 1'
  },
  {
    link: '#',
    title: 'Section 2'
  },
  {
    link: '#',
    title: 'Section 3'
  },
  {
    link: '#',
    title: 'Section 4'
  },
  {
    link: '#',
    title: 'Section 5'
  },
  {
    link: '#',
    title: 'Section 6'
  },
  {
    link: '#',
    title: 'Section 7'
  },
  {
    link: '#',
    title: 'Section 8'
  },
  {
    link: '#',
    title: 'Section 9'
  },
  {
    link: '#',
    title: 'Section 10'
  },
  {
    link: '#',
    title: 'Section 11'
  },
  {
    link: '#',
    title: 'Section 12'
  },
  {
    link: '#',
    title: 'Section 13'
  },
  {
    link: '#',
    title: 'Section 14'
  },
  {
    link: '#',
    title: 'Section 15'
  }
];

export const formRadioButtons: IFormControl[] = [
  {
    name: 'Round trip',
    value: 1
  },
  {
    name: 'One-way',
    value: 2
  }
];

export const citiesList: IFormControl[] = [
  {
    name: 'Kyiv',
    value: 1
  },
  {
    name: 'New York',
    value: 2
  },
  {
    name: 'London',
    value: 3
  },
  {
    name: 'Paris',
    value: 4
  }
];

export const classesList: IFormControl[] = [
  {
    name: 'Standard',
    value: 1
  },
  {
    name: 'Economy',
    value: 2
  },
  {
    name: 'First class',
    value: 3,
  }
];

export const guestsList: IFormControl[] = [
  {
    name: '1',
    value: 1,
  },
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
];

export const airlinesList = [
  {
    name: 'Ukrainian airlines',
    value: 1,
  },
  {
    name: 'British airlines',
    value: 2,
  },
  {
    name: 'American airlines',
    value: 3,
  },
];


export const articleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur culpa eligendi eveniet fugit illum iusto nobis qui quia? Aut consectetur cum eius est, facere odit quibusdam quidem temporibus.';

export const externalLinks: ILink[] = [
  {
    ref: 'https://www.google.com/',
    title: 'Google'
  }
];
