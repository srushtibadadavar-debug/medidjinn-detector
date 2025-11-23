import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Award, TrendingUp } from "lucide-react";

const models = [
  {
    name: "YOLOv5su",
    accuracy: "99.7%",
    speed: "Fast",
    badge: "Best",
    description: "Our flagship model optimized for medical imaging deepfake detection",
    features: [
      "Highest accuracy at 99.7%",
      "~300ms average processing time",
      "Optimized for medical datasets",
      "Real-time detection capable",
    ],
    icon: Award,
    color: "text-primary",
  },
  {
    name: "YOLOv8x",
    accuracy: "99.4%",
    speed: "Moderate",
    badge: "Balanced",
    description: "High accuracy model with moderate processing speeds",
    features: [
      "Excellent 99.4% accuracy",
      "~500ms processing time",
      "Enhanced feature detection",
      "Good for batch processing",
    ],
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    name: "YOLOv8n",
    accuracy: "98.0%",
    speed: "Very Fast",
    badge: "Fastest",
    description: "Lightweight model for rapid screening and high-volume processing",
    features: [
      "Strong 98.0% accuracy",
      "~150ms processing time",
      "Minimal resource usage",
      "Perfect for screening",
    ],
    icon: Zap,
    color: "text-warning",
  },
];

export default function Models() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Detection Models</h1>
          <p className="text-muted-foreground">
            Choose from our suite of AI models optimized for medical deepfake detection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <Card
                key={model.name}
                className="p-6 space-y-6 hover:shadow-medical transition-all bg-gradient-card"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-primary/10`}>
                      <Icon className={`h-8 w-8 ${model.color}`} />
                    </div>
                    <Badge>{model.badge}</Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{model.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {model.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                    <div className="text-2xl font-bold text-primary">
                      {model.accuracy}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Speed</div>
                    <div className="text-2xl font-bold text-accent">
                      {model.speed}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  {model.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Model Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Model</th>
                  <th className="text-left py-3 px-4">Accuracy</th>
                  <th className="text-left py-3 px-4">Speed</th>
                  <th className="text-left py-3 px-4">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-secondary/50">
                  <td className="py-3 px-4 font-medium">YOLOv5su</td>
                  <td className="py-3 px-4">99.7%</td>
                  <td className="py-3 px-4">~300ms</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    Critical diagnosis verification
                  </td>
                </tr>
                <tr className="border-b hover:bg-secondary/50">
                  <td className="py-3 px-4 font-medium">YOLOv8x</td>
                  <td className="py-3 px-4">99.4%</td>
                  <td className="py-3 px-4">~500ms</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    Research and detailed analysis
                  </td>
                </tr>
                <tr className="hover:bg-secondary/50">
                  <td className="py-3 px-4 font-medium">YOLOv8n</td>
                  <td className="py-3 px-4">98.0%</td>
                  <td className="py-3 px-4">~150ms</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    High-volume screening
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
