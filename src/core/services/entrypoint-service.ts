import type {Entrypoint} from '@definitions/entrypoint';
import type {Readable, Writable} from "svelte/store";
import {get, writable} from "svelte/store";

export class EntrypointService {
  private static _instance: EntrypointService;
  private readonly _entrypoint$: Writable<Entrypoint> = writable(null);

  private constructor(entryPoint: Entrypoint) {
    this._entrypoint$.set(entryPoint);
  }

  public static getInstance(entryPoint?: Entrypoint): EntrypointService {
    if (!this._instance) {
      this._instance = new EntrypointService(entryPoint);
    }
    return this._instance;
  }

  public get entrypoint$(): Readable<Entrypoint> {
    return this._entrypoint$;
  }

  public get readFromRight(): boolean {
    return this.entrypoint.options?.directionality === "RIGHT_TO_LEFT";
  }

  public get readFromLeft(): boolean {
    return this.entrypoint.options?.directionality === "LEFT_TO_RIGHT";
  }

  public get entrypoint(): Entrypoint {
    return get(this._entrypoint$);
  }
}
