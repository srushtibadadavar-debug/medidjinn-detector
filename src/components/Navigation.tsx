import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Activity, Upload, FlaskConical, BarChart3, FileText, Microscope } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Activity },
  { path: "/upload", label: "Upload", icon: Upload },
  { path: "/demo", label: "Demo", icon: Microscope },
  { path: "/models", label: "Models", icon: FlaskConical },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/about", label: "About", icon: FileText },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            MedDeepfake AI
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-medical"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
