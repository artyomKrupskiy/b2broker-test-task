import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PseudoSocketService {
  private messageSubject = new Subject<string>();
  private formData = {}
  private additionalArrayIds = []

  public workerTest: any = null

  public getMessageStream(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  public setFormData(data: any): void {
    this.formData = data;

    this.workerTest.postMessage(JSON.stringify(data))
  }

  public getFormData(): object {
    return this.formData;
  }

  public setWorker(worker: any): void {
    this.workerTest = worker
  }

  public setAdditionalArrayIds(additionalArrayIds: any): void {
    this.additionalArrayIds = additionalArrayIds
  }

  public getAdditionalArrayIds() {
    return this.additionalArrayIds
  }
}

