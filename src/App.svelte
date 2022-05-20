<script lang="ts">
	function onSubmit(e: any) {
		const formData = new FormData(e.target)
		console.log("FORM DATA", formData)
	}
</script>

<main>
	<h1>Moicca Marjukka!</h1>
	<p>Tästä pääset varaamaan tunnin omaa aikaa haluamanasi ajankohtana :)</p>
	<form on:submit|preventDefault={onSubmit}>
		<label>
			<span>Päivä:</span>
			<input type="text" name="date" />
		</label>
		<label>
			<span>Aika:</span>
			<input type="text" name="time" />
		</label>
		<button type="submit">Varaa!</button>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>