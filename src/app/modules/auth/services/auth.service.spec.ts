import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as dataRaw from "../../../data/user.json"
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (dataRaw as any).default
  let httpClientSpy : {post: jasmine.Spy}
  let mockCookieService: jasmine.SpyObj<CookieService>;
  const mockResponse = {
    tokenSession: "0x0x0x0x0x0x",
    data: {},
  }
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CookieService],
      providers: [
        {provide: CookieService, useValue: mockCookieService },
        AuthService,
        CookieService,
      ]
    },);
    mockCookieService = jasmine.createSpyObj("CookieService",["set", "get"]);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']); 
    service = new AuthService(httpClientSpy as any, mockCookieService as any);
  });

  it('should return an object as data and tokensession', (done: DoneFn) => {
    const user = mockUser.userOk;
    
    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    service.sendCredentials(user.email, user.password).subscribe(data => {
      const getProperties = Object.keys(data)
      expect(getProperties).toContain("data");
      expect(getProperties).toContain("tokenSession");
      done()

      console.log("555555555555555555",data);

    });

    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
