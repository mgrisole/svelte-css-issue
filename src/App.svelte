<script lang="ts">
	import {AvailabilityService} from "@services/availability-service";

	const availability_service = AvailabilityService.getInstance();
	const availabilities$ = availability_service.availabilities$;

	let display_size_picker = false;
</script>

<div>
	<div class="vtmn-flex vtmn-flex-col">
		{#each $availabilities$ as availability}
			<button class="g-box vtmn-w-full" on:click disabled={!availability.available}>
				<div class="vtmn-py-4 vtmn-px-5 vtmn-font-bold">
					{availability.label}
				</div>
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	button {
		&:not(:last-child) {
			margin-bottom: var(--vtmn-spacing_4);
		}

		&:disabled {
			opacity: 50%;
			cursor: not-allowed;
		}
	}
</style>
