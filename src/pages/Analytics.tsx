import { Card } from "@/components/ui/card";
import { TrendingUp, Image, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Analytics() {
  const stats = [
    { label: "Total Analyses", value: "2,547", icon: Image, color: "text-primary" },
    { label: "Real Images", value: "1,923", icon: CheckCircle2, color: "text-success" },
    { label: "Fake Detected", value: "624", icon: AlertTriangle, color: "text-destructive" },
    { label: "Avg Confidence", value: "96.8%", icon: TrendingUp, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            System-wide detection statistics and performance metrics
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6 space-y-3 bg-gradient-card">
                <div className={`p-3 rounded-xl bg-primary/10 w-fit`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Detection Accuracy by Model</h3>
            <div className="space-y-4">
              {[
                { name: "YOLOv5su", accuracy: 99.7 },
                { name: "YOLOv8x", accuracy: 99.4 },
                { name: "YOLOv8n", accuracy: 98.0 },
              ].map((model) => (
                <div key={model.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{model.name}</span>
                    <span className="text-muted-foreground">{model.accuracy}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary"
                      style={{ width: `${model.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Detection Results</h3>
            <div className="aspect-square rounded-lg bg-gradient-subtle flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--success))"
                      strokeWidth="12"
                      strokeDasharray="188.4 62.8"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="12"
                      strokeDasharray="62.8 188.4"
                      strokeDashoffset="-188.4"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">75.5%</div>
                      <div className="text-sm text-muted-foreground">Real</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 justify-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span>Real (75.5%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <span>Fake (24.5%)</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-bold">Recent Analyses</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Result</th>
                  <th className="text-left py-3 px-4">Confidence</th>
                  <th className="text-left py-3 px-4">Model</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "2024-11-23", type: "X-Ray", result: "REAL", confidence: 97.2, model: "YOLOv5su" },
                  { date: "2024-11-23", type: "CT Scan", result: "FAKE", confidence: 92.8, model: "YOLOv8x" },
                  { date: "2024-11-22", type: "MRI", result: "REAL", confidence: 98.9, model: "YOLOv5su" },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-secondary/50">
                    <td className="py-3 px-4 text-sm text-muted-foreground">{item.date}</td>
                    <td className="py-3 px-4 font-medium">{item.type}</td>
                    <td className="py-3 px-4">
                      <span className={`text-sm font-medium ${item.result === 'REAL' ? 'text-success' : 'text-destructive'}`}>
                        {item.result}
                      </span>
                    </td>
                    <td className="py-3 px-4">{item.confidence}%</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{item.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
