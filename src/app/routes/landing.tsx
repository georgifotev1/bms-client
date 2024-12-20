import { Home } from "lucide-react";
import { Button } from "../../components/ui/button/button";

export const LandinRoute = () => {
  return (
    <div className="flex">
      Landing Page
      <Button variant="default">
        <Home />
      </Button>
    </div>
  );
};
