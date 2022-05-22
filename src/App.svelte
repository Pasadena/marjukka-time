<script lang="ts">
	import SveltyPicker from 'svelty-picker'
	let selectedTime;

	function setSelectedTime(event) {
		selectedTime = event.detail
	}
	async function onSubmit(e: any) {
		console.log("FORM DATA", selectedTime)
		try {
			await fetch('https://9bc8zpr105.execute-api.eu-west-1.amazonaws.com/marjukanaika-mailsender', {
			method: 'POST',
			body: JSON.stringify({time: selectedTime}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		} catch(e) {
			console.log("Cannot send email", e)
		}
		
	}
</script>

<main>
	<h1>Moicca Marjukka!</h1>
	<p>Tästä pääset varaamaan tunnin omaa aikaa haluamanasi ajankohtana :)</p>
	<form on:submit|preventDefault={onSubmit}>
		<label for="time">
			<span>Valittu aika:</span>
			<SveltyPicker format="dd.mm.yyyy hh:mm" name="time" required on:change={setSelectedTime}></SveltyPicker>
		</label>
		<button type="submit">Varaa!</button>
	</form>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>