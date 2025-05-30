
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  User, 
  FileText, 
  BookOpen, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: BookOpen, label: 'Dashboard', path: '/' },
    { icon: User, label: 'Students', path: '/students' },
    { icon: FileText, label: 'Results', path: '/results' },
    { icon: Calendar, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-50",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {isOpen && (
          <h2 className="text-lg font-semibold">SRMS</h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-white hover:bg-slate-700"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-700",
              isActive ? "bg-blue-600 text-white" : "text-slate-300"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
