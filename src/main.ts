import App from './App.svelte';
import "../public/assets/fonts.css";
import "../public/assets/global.scss";
import "@vtmn/css/dist/index.css";
import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import {EntrypointService} from "@services/entrypoint-service";
import type {Entrypoint} from "@definitions/entrypoint";

class OneshopProductPageWidget {
	private _app: App;
	private _entrypoint_service: EntrypointService;

	constructor(entrypoint: Entrypoint) {
		this._entrypoint_service = EntrypointService.getInstance(entrypoint);

		this._app = new App({
			target: document.getElementById("product-page-widget-container")
		});
	}

	// dist attachDeliveryCompletionHandler(handler: (completion_event: CompletionEvent) => void): void {
	// 	this._completion_handlers.push(handler);
	// }
	//
	// dist attachRemoveUnavailableProductsHandler(handler: (products: EntryPointProduct[]) => void): void {
	// 	this._entrypoint_service.remove_products$.subscribe(products => handler(products))
	// }
}

export default OneshopProductPageWidget;
