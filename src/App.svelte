<script lang="ts">
	import SveltyPicker from 'svelty-picker'
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { success, failure } from './toasts'

	async function onSubmit(e: any) {
		const response = await fetch('https://9bc8zpr105.execute-api.eu-west-1.amazonaws.com/marjukanaika-mailsender', {
			method: 'POST',
			body: JSON.stringify({ time: e.target[0].value }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.ok) {
			success("Booked some Marjukka-time!")
		} else {
			failure("Yikes, something went wrong while booking time!")
		}	
	}
</script>

<main>
	<h1>Moicca Marjukka!</h1>
	<p>Tästä pääset varaamaan tunnin omaa aikaa haluamanasi ajankohtana :)</p>
	<form on:submit|preventDefault={onSubmit}>
		<label for="time" class="time-select">
			<span>Valittu aika:</span>
			<SveltyPicker format="dd.mm.yyyy hh:ii"  name="time" required />
		</label>
		<button type="submit">Varaa!</button>
	</form>
	<SvelteToast options={{}} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		margin: 2rem 0rem;
	}

	button {
		cursor: pointer;
		padding: 0.5em 1em;
		background-color: skyblue;
		width: unset;
		border-radius: 6px;
		font-size: 1.5rem;
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		background-color: blueviolet;
		color: white;
	}

	.time-select {
		margin: 2rem 0rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>