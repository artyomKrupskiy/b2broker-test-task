import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PseudoSocketService {
  private formData = {};
  private additionalArrayIds: string[] = [];

  public worker: any = null;

  public setFormData(formData: object): void {
    this.formData = formData;

    this.worker.postMessage(JSON.stringify(formData));
  }

  public getFormData(): object {
    return this.formData;
  }

  public setWorker(worker: any): void {
    this.worker = worker;
  }

  public setAdditionalArrayIds(additionalArrayIds: string[]): void {
    this.additionalArrayIds = additionalArrayIds;
  }

  public getAdditionalArrayIds(): string[] {
    return this.additionalArrayIds;
  }
}
