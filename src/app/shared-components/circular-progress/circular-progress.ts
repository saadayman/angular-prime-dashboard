import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="circular-progress-wrapper" [style.width]="size + 'px'" [style.height]="size + 'px'">
      <svg class="circular-progress-svg" [attr.width]="size" [attr.height]="size">
        <!-- Background circle -->
        <circle
          class="progress-bg"
          [attr.cx]="size / 2"
          [attr.cy]="size / 2"
          [attr.r]="radius"
          [attr.stroke-width]="strokeWidth"
          fill="none"
        />
        <!-- Progress circle -->
        <circle
          class="progress-bar"
          [attr.cx]="size / 2"
          [attr.cy]="size / 2"
          [attr.r]="radius"
          [attr.stroke-width]="strokeWidth"
          fill="none"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="strokeDashoffset"
          [attr.stroke]="color"
        />
      </svg>
      <!-- Percentage text -->
      <div class="progress-text" [style.color]="color">
        {{ value }}%
      </div>
    </div>
  `,
  styles: [`
    .circular-progress-wrapper {
      position: relative;
      display: inline-block;
    }

    .circular-progress-svg {
      transform: rotate(-90deg);
      width: 100%;
      height: 100%;
    }

    .progress-bg {
      stroke: #404040;
    }

    .progress-bar {
      stroke-linecap: round;
      transition: stroke-dashoffset 0.5s ease;
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 1rem;
    }
  `]
})
export class CircularProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() size: number = 80;
  @Input() strokeWidth: number = 8;
  @Input() color: string = '#00C5D6';

  get radius(): number {
    return (this.size - this.strokeWidth) / 2;
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get strokeDashoffset(): number {
    const progress = this.value / this.max;
    return this.circumference - (progress * this.circumference);
  }
}
