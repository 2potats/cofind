<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<div class="text-3xl font-bold underline">{@html data.content}</div>
