import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackspageComponent } from './trackspage.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

describe('TrackspageComponent', () => {
  let component: TrackspageComponent;
  let fixture: ComponentFixture<TrackspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, TrackspageComponent,
        SectionGenericComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(TrackspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
