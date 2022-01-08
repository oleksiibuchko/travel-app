import { INavItem } from '../shared/interfaces/nav-item.interface';
import { IFormControl } from '../shared/interfaces/form-control.interface';
import { ILink } from '../shared/interfaces/link.interface';

export const headerNavItems: INavItem[] = [
  {
    link: '/topics/1',
    title: 'Topic 1'
  },
  {
    link: '/topics/2',
    title: 'Topic 2'
  },
  {
    link: '/topics/3',
    title: 'Topic 3'
  },
  {
    link: '/topics/4',
    title: 'Topic 4'
  }
];

export const navItems: INavItem[] = [
  {
    link: 'section/1',
    title: 'Section 1'
  },
  {
    link: 'section/2',
    title: 'Section 2'
  },
  {
    link: 'section/3',
    title: 'Section 3'
  },
  {
    link: 'section/4',
    title: 'Section 4'
  }
];

export const sideBarNavItems: INavItem[] = [
  {
    link: 'section/1',
    title: 'Section 1'
  },
  {
    link: 'section/2',
    title: 'Section 2'
  },
  {
    link: 'section/3',
    title: 'Section 3'
  },
  {
    link: 'section/4',
    title: 'Section 4'
  },
  {
    link: 'section/5',
    title: 'Section 5'
  },
  {
    link: 'section/6',
    title: 'Section 6'
  },
  {
    link: 'section/7',
    title: 'Section 7'
  },
  {
    link: 'section/8',
    title: 'Section 8'
  },
  {
    link: 'section/9',
    title: 'Section 9'
  },
  {
    link: 'section/10',
    title: 'Section 10'
  },
  {
    link: 'section/11',
    title: 'Section 11'
  },
  {
    link: 'section/12',
    title: 'Section 12'
  },
  {
    link: 'section/13',
    title: 'Section 13'
  },
  {
    link: 'section/14',
    title: 'Section 14'
  },
  {
    link: 'section/15',
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
