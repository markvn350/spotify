import { Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { MediaPlayerComponent } from '../../../../shared/components/media-player/media-player.component';
import { SideBarComponent as SideBarComponent_1 } from '../../../../shared/components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [SideBarComponent_1, MediaPlayerComponent, RouterOutlet]
})
export class HomePageComponent {
  
}
