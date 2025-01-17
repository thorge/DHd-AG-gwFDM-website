import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'
import {
  IconChevronDown,
  IconCheck,
  IconX,
  IconTrash,
  IconAlertCircle,
  IconInfoCircle,
  IconChevronLeft,
  IconChevronRight,
  IconCirclePlus,
  IconCircleMinus,
  IconMinus,
  IconSquare,
  IconSquareCheck,
  IconArrowUp,
  IconArrowDown
} from '@tabler/icons-vue'

const aliases: IconAliases = {
  collapse: IconChevronDown,
  complete: IconCheck,
  cancel: IconX,
  close: IconX,
  delete: IconTrash,
  clear: IconX,
  success: IconCheck,
  info: IconInfoCircle,
  warning: IconAlertCircle,
  error: IconAlertCircle,
  prev: IconChevronLeft,
  next: IconChevronRight,
  checkboxOn: IconSquareCheck,
  checkboxOff: IconSquare,
  checkboxIndeterminate: IconMinus,
  delimiter: IconCircleMinus,
  sort: IconChevronDown,
  expand: IconChevronDown,
  menu: IconChevronDown,
  subgroup: IconChevronDown,
  dropdown: IconChevronDown,
  radioOn: IconSquareCheck,
  radioOff: IconSquare,
  edit: IconCheck,
  ratingEmpty: IconCircleMinus,
  ratingFull: IconCirclePlus,
  ratingHalf: IconMinus,
  sortAsc: IconArrowUp,
  sortDesc: IconArrowDown,
  loading: IconCirclePlus,
  first: IconChevronLeft,
  last: IconChevronRight,
  unfold: IconChevronDown,
  file: IconChevronDown,
  plus: IconCirclePlus,
  minus: IconCircleMinus,
}

const custom: IconSet = {
  component: (props: IconProps) => h(props.icon, { ...props }),  // Render the icon passed through props
}

export { aliases, custom }