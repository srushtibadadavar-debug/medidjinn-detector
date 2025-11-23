import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Award, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">About This Project</h1>
          <p className="text-muted-foreground">
            Research-backed medical deepfake detection system
          </p>
        </div>

        <Card className="p-8 space-y-6 bg-gradient-card">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Research Paper</h2>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                "A New Approach for Effective Medical Deepfake Detection in Medical Images"
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="font-medium">Published:</span>
                  <span className="text-muted-foreground">IEEE Access, 2024</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">DOI:</span>
                  <span className="text-muted-foreground">10.1109/ACCESS.2024.XXXXX</span>
                </div>
              </div>
            </div>
          </div>

          <Button className="gap-2 w-full sm:w-auto">
            <ExternalLink className="h-4 w-4" />
            Read Full Paper
          </Button>
        </Card>

        <Card className="p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Authors</h2>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Mehmet Karaköse</div>
                  <div className="text-sm text-muted-foreground">
                    Department of Computer Engineering
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Hasan Yetiş</div>
                  <div className="text-sm text-muted-foreground">
                    Department of Computer Engineering
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Mert Çeçen</div>
                  <div className="text-sm text-muted-foreground">
                    Department of Computer Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-success/10">
              <Award className="h-8 w-8 text-success" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Achieved 99.7% accuracy using optimized YOLOv5su architecture
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    First comprehensive study on YOLO-based medical deepfake detection
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Real-time processing capability for clinical applications
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">
                    Extensive evaluation on multiple medical imaging modalities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 space-y-4 bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold">Abstract</h2>
          <p className="text-muted-foreground leading-relaxed">
            This research presents a novel approach to detecting deepfake manipulations in medical 
            images using advanced YOLO-based architectures. With the increasing sophistication of 
            AI-generated medical images, there is a critical need for robust detection systems to 
            maintain the integrity of medical diagnostics. Our optimized YOLOv5su model achieves 
            state-of-the-art performance with 99.7% accuracy while maintaining real-time processing 
            speeds suitable for clinical deployment.
          </p>
        </Card>
      </div>
    </div>
  );
}
