import {
  IconBooks,
  IconCalendarEvent,
  IconInfoCircle,
  IconMessages,
  IconNews,
} from '@tabler/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  // {
  //   header: 'DHd-AG gwFDM',
  // },
  {
    title: 'newsPage.title',
    icon: IconNews,
    to: 'news',
  },
  {
    title: 'eventsPage.title',
    icon: IconCalendarEvent,
    to: 'events',
  },
  {
    title: 'publicationsPage.title',
    icon: IconBooks,
    to: 'publications',
  },
  {
    title: 'aboutPage.title',
    icon: IconInfoCircle,
    to: 'about',
  },
  {
    title: 'contactPage.title',
    icon: IconMessages,
    to: 'contact',
  },
];

export default sidebarItem;
