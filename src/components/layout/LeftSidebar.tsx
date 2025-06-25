import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bell,
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const LeftSidebar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
      isActive
        ? 'bg-accent text-accent-foreground'
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavLink
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink to="/" className={navLinkClasses}>
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink to="#" className={navLinkClasses}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Orders</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink to="#" className={navLinkClasses}>
              <Users className="h-5 w-5" />
              <span className="sr-only">Customers</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Customers</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink to="#" className={navLinkClasses}>
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Analytics</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Notifications</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default LeftSidebar;