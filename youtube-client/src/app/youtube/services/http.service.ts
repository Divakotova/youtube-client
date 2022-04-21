import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //private apiKey: string = 'AIzaSyCp_QBbNzvIQD6tvJx4PjXCtCUnkTl9gMI';
  private apiKey: string = 'AIzaSyA8b1f4Dd2OpT1MKC-ipnAQngul1Zkjg6Q';

  constructor(private http: HttpClient) {}

  public getSearchList(args: string): Observable<any> {
    return this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${args}&type=video&key=${this.apiKey}`
      )
      .pipe(
        map((res: any) => {
          const arrId: string[] = [];
          res.items.forEach((element: any) => {
            arrId.push(element.id.videoId);
          });
          return arrId;
        }),
        mergeMap((id) => {
          return this.http.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${id}&key=${this.apiKey}`
          );
        })
      );
  }

  public getDetailsId(id: string[]): Observable<any> {
    return this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${id}&key=${this.apiKey}`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
