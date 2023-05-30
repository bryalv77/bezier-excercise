class BezierCurve2 {
  private controlPoints: [number, number][];

  constructor(controlPoints: [number, number][]) {
    this.controlPoints = controlPoints;
  }

  public getControlPoints(): [number, number][] {
    return this.controlPoints;
  }

  public setControlPoints(controlPoints: [number, number][]): void {
    this.controlPoints = controlPoints;
  }

  eval(value: number): [number, number] {
    const currentControl = this.controlPoints.length - 1;
    const result: [number, number] = [0, 0];

    for (let i = 0; i <= currentControl; i++) {
      const coefficient =
        this.binomialCoefficient(currentControl, i) *
        Math.pow(1 - value, currentControl - i) *
        Math.pow(value, i);
      result[0] += coefficient * this.controlPoints[i][0];
      result[1] += coefficient * this.controlPoints[i][1];
    }

    return result;
  }

  editControlPoint(index: number, newValue: [number, number]): void {
    if (index >= 0 && index < this.controlPoints.length) {
      this.controlPoints[index] = newValue;
    }
  }

  private binomialCoefficient(firstValue: number, secondValue: number): number {
    if (secondValue === 0 || secondValue === firstValue) {
      return 1;
    } else {
      let coefficient = 1;
      for (let i = 1; i <= secondValue; i++) {
        coefficient *= (firstValue - i + 1) / i;
      }
      return coefficient;
    }
  }
}
