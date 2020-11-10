import { Component } from '@angular/core'

/**
 * TODO: Make page a series of cards with a (plus) icon at left of each of them.
 * Clicking this will expand the card showing just the title to include the thumbnail
 * and description.
 */
@Component({
    selector: 'agp-library',
    template: `
    <div class="agp-library">
        <h1>TODO</h1>
    </div>
    `,
    styleUrls: ['../home.component.scss']
})
export class LibraryComponent {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
