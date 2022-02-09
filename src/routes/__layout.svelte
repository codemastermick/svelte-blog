<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '$lib/styles/style.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
