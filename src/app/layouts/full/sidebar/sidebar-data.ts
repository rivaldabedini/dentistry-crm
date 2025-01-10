import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    navCap: 'Patients',
  },
  {
    displayName: 'Records',
    iconName: 'file-text',
    route: '/ui-components/patient-records',
  },
  {
    displayName: 'Appointments',
    iconName: 'calendar-event',
    route: '/ui-components/schedule-appointment',
  },
  {
    displayName: 'Treatment Plans',
    iconName: 'report-medical',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Billing & Payments',
    iconName: 'receipt-euro',
    route: '/ui-components/menu',
  },
  {
    navCap: 'CLINICAL',
  },
  {
    displayName: 'Treatments',
    iconName: 'file-text',
    route: '/authentication/login',
  },
  {
    displayName: 'Inventory',
    iconName: 'file-text',
    route: '/authentication/register',
  },
  {
    navCap: 'Staff',
  },
  {
    displayName: 'Staff Directory',
    iconName: 'users',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Schedules',
    iconName: 'calendar-user',
    route: '/extra/icons',
    // route: '/extra/sample-page',
  },
  {
    displayName: 'Roles & Permissions',
    iconName: 'file-text',
    route: '/extra/icons',
    // route: '/extra/sample-page',
  },
];
