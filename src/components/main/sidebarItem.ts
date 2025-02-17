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
  {
    title: 'breadcrumb.items.news.label',
    icon: IconNews,
    to: 'news',
  },
  {
    title: 'breadcrumb.items.events.label',
    icon: IconCalendarEvent,
    to: 'events',
  },
  {
    title: 'breadcrumb.items.publications.label',
    icon: IconBooks,
    to: 'publications',
  },
  {
    title: 'breadcrumb.items.about.label',
    icon: IconInfoCircle,
    to: 'about',
  },
  {
    title: 'breadcrumb.items.contact.label',
    icon: IconMessages,
    to: 'contact',
  },
];

export default sidebarItem;
