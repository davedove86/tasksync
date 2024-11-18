import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/modeToggle';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <ModeToggle />
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4'>
            <h2>Welcome John Doe</h2>
          </div>
          <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
            <div className='aspect-video rounded-xl bg-muted/50 p-4'>
              <h2>To Do Tasks</h2>
            </div>
            <div className='aspect-video rounded-xl bg-muted/50 p-4'>
              <h2>Overdue Tasks</h2>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
