"use client";

import { SignOutButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Home, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/Logo";
import { ROUTE } from "@/constants";

const NavItems = [
  { icon: Home, label: "Dashboard", href: ROUTE.USER_DASHBOARD },
];

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#F9F5E8] flex-1">
        <Sidebar>
          <SidebarHeader className="flex h-16 pl-6 justify-center">
            <Logo />
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {NavItems.map((item) => (
                <SidebarMenuItem key={item.label} className="px-4">
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SignOutButton>
                  <SidebarMenuButton className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </SidebarMenuButton>
                </SignOutButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold text-gray-900 ml-4">
              User Dashboard
            </h1>
          </header>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default UserDashboardLayout;
