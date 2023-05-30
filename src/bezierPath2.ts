class BezierPath2 {
  private segments: BezierCurve2[];
  private closed: boolean;

  constructor(segments: BezierCurve2[], closed: boolean = false) {
    this.segments = segments;
    this.closed = closed;
  }

  getSegment(index: number): BezierCurve2 {
    return this.segments[index];
  }

  addSegment(segment: BezierCurve2): void {
    this.segments.push(segment);
  }

  editControlPoint(
    segmentIndex: number,
    pointIndex: number,
    newValue: [number, number]
  ): void {
    const segment = this.segments[segmentIndex];
    if (segment) {
      segment.editControlPoint(pointIndex, newValue);
    }
  }

  convertToStraightLine(index: number): void {
    const segment = this.segments[index];
    if (segment) {
      const controlPoints = segment.getControlPoints();
      const startPoint = controlPoints[0];
      const endPoint = controlPoints[controlPoints.length - 1];
      const straightLineSegment = new BezierCurve2([startPoint, endPoint]);
      this.segments[index] = straightLineSegment;
    }
  }
}
