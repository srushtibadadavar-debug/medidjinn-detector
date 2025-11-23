import { useLocation, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertTriangle, Upload, Clock, Cpu, Image as ImageIcon } from "lucide-react";

export default function Results() {
  const location = useLocation();
  const { result, preview, filename } = location.state || {};

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-warning mx-auto" />
          <h2 className="text-2xl font-bold">No Results Found</h2>
          <p className="text-muted-foreground">Please upload an image first</p>
          <Link to="/upload">
            <Button>Upload Image</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const isReal = result.prediction === 'REAL';
  const confidence = parseFloat(result.confidence) * 100;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Analysis Results</h1>
          <p className="text-muted-foreground">
            Detection completed for {filename}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Preview */}
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Original Image
            </h2>
            {preview && (
              <div className="rounded-lg overflow-hidden bg-muted">
                <img
                  src={preview}
                  alt="Analyzed"
                  className="w-full max-h-[500px] object-contain"
                />
              </div>
            )}
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Prediction Card */}
            <Card className={`p-8 ${isReal ? 'bg-success/5 border-success/20' : 'bg-destructive/5 border-destructive/20'}`}>
              <div className="text-center space-y-4">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${isReal ? 'bg-success/10' : 'bg-destructive/10'}`}>
                  {isReal ? (
                    <CheckCircle2 className="h-10 w-10 text-success" />
                  ) : (
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                  )}
                </div>
                
                <div>
                  <div className={`text-5xl font-bold ${isReal ? 'text-success' : 'text-destructive'}`}>
                    {result.prediction}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    {isReal ? 'Image appears authentic' : 'Potential manipulation detected'}
                  </p>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-semibold">{confidence.toFixed(1)}%</span>
                  </div>
                  <Progress value={confidence} className="h-3" />
                </div>
              </div>
            </Card>

            {/* Details Card */}
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Detection Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Model Used</div>
                    <div className="text-sm text-muted-foreground">{result.modelUsed}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Processing Time</div>
                    <div className="text-sm text-muted-foreground">{result.processingTime}s</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <ImageIcon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Image Size</div>
                    <div className="text-sm text-muted-foreground">{result.imageSize}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Link to="/upload" className="flex-1">
                <Button className="w-full gap-2" size="lg">
                  <Upload className="h-5 w-5" />
                  Analyze Another
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
