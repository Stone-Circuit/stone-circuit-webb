export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  isExternal?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface SidebarItem {
  title: string;
  href?: string;
  items?: SidebarItem[];
  isExpanded?: boolean;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}
