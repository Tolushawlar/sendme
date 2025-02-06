"use client";

import { File, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const baseHref = "/dashboard/admin";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: baseHref },
  { icon: File, label: "Applications", href: `${baseHref}/applications` },
  // { icon: Users, label: "Users", href: "#" },
];

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map(({ icon: Icon, label, href }) => {
        // Check if the current path starts with the item's href
        const isActive =
          pathname === href ||
          (pathname?.startsWith(href) && href !== baseHref);

        return (
          <SidebarMenuItem key={label}>
            <SidebarMenuButton
              asChild
              className={`px-4 ${isActive ? "bg-gray-200 text-blue-600" : ""}`}
            >
              <Link href={href}>
                <Icon
                  className={`mr-2 h-4 w-4 ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                {label}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};
