import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent {
  h1 = 'Landing Page Angular';
  logoAlt = "Logo de florencia"
  src = "./assets/Logo.png"
  desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacus urna. Nullam augue ligula, posuere a elementum eu, fermentum ut massa. Suspendisse hendrerit nisi a lorem egestas, id tincidunt nibh tincidunt. In dui quam, commodo non dignissim quis, bibendum eu lacus. Sed rutrum tellus odio, sit amet ullamcorper libero suscipit sit amet. Nulla fermentum nunc sit amet diam ullamcorper vehicula. Sed dignissim enim ex, eget hendrerit quam bibendum placerat.';
}
