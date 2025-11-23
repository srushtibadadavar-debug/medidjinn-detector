import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Eye } from "lucide-react";

const demoSamples = [
  {
    id: 1,
    type: "Osteoarthritis X-Ray",
    prediction: "REAL",
    confidence: 0.957,
    description: "Knee joint X-ray showing authentic osteoarthritis markers",
  },
  {
    id: 2,
    type: "Lung CT Scan",
    prediction: "FAKE",
    confidence: 0.923,
    description: "CT scan with detected AI-generated artifacts",
  },
  {
    id: 3,
    type: "Brain MRI",
    prediction: "REAL",
    confidence: 0.989,
    description: "Authentic T1-weighted brain MRI scan",
  },
  {
    id: 4,
    type: "Chest X-Ray",
    prediction: "FAKE",
    confidence: 0.876,
    description: "Manipulated chest radiograph with synthetic features",
  },
];

export default function Demo() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Demo Samples</h1>
          <p className="text-muted-foreground">
            Pre-analyzed medical images showing detection capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {demoSamples.map((sample) => {
            const isReal = sample.prediction === "REAL";
            const confidence = sample.confidence * 100;

            return (
              <Card key={sample.id} className="p-6 space-y-4 hover:shadow-medical transition-all">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{sample.type}</h3>
                    <p className="text-sm text-muted-foreground">
                      Sample #{sample.id}
                    </p>
                  </div>
                  <Badge
                    variant={isReal ? "default" : "destructive"}
                    className="gap-1"
                  >
                    {isReal ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {sample.prediction}
                  </Badge>
                </div>

                <div className="aspect-video rounded-lg bg-gradient-subtle flex items-center justify-center border">
                  <Eye className="h-12 w-12 text-muted-foreground/50" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {sample.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Detection Confidence</span>
                    <span className="font-semibold">{confidence.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        isReal ? "bg-success" : "bg-destructive"
                      }`}
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2">
                  <Eye className="h-4 w-4" />
                  View Details
                </Button>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 text-center space-y-4 bg-gradient-card">
          <h2 className="text-2xl font-bold">Ready to Test Your Own Images?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your medical images to see how our AI detection system performs
            with real-world data
          </p>
          <Button size="lg" className="gap-2">
            Upload Image
          </Button>
        </Card>
      </div>
    </div>
  );
}
