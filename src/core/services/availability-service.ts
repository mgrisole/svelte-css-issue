import {EntrypointService} from "@services/entrypoint-service";
import {Readable, writable} from "svelte/store";
import type {Availability} from "@definitions/availability";

export class AvailabilityService {
  private static _instance: AvailabilityService;
  private _availabilities$ = writable<Availability[]>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
    this.getAvailabilities();
  }

  public static getInstance(): AvailabilityService {
    if (!this._instance) {
      this._instance = new AvailabilityService();
    }
    return this._instance;
  }

  public get availabilities$(): Readable<Availability[]> {
    return this._availabilities$;
  }

  private getAvailabilities(): void {
    this._availabilities$.set([
      {
        available: true,
        size_id: "123",
        label: "38"
      },
      {
        available: false,
        size_id: "123",
        label: "39"
      }
    ]);
  }
}


