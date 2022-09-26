<script lang="ts">
  // import Counter from "$lib/components/Counter.svelte";
  import ProgrammerSvg from "$lib/components/svg/ProgrammerSvg.svelte";
  import Table from "$lib/components/Table.svelte";
  import ToolsAndLanguages from "$lib/components/ToolsAndLanguages.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div
      class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Passionate web developer</h1>
      <p class="mb-8 leading-relaxed">
        In the web development space everything is constantly evolving which is what makes it so interesting and fun!
      </p>
      <div class="flex justify-center">
        <button
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >Button</button
        >
        <button
          class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >Button</button
        >
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <figure class="object-cover object-center rounded" alt="hero">
        <ProgrammerSvg />
      </figure>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <ToolsAndLanguages />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Experienced</h1>
      <p class="mb-8 leading-relaxed">High confident in popular tools, web languages, libraries and frameworks</p>
      <div class="flex justify-center">
        <button
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >Button</button
        >
        <button
          class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >Button</button
        >
      </div>
    </div>
  </div>
</section>

<Table
  list={[
    { Description: "TailwindCSS snippets", Website: "https://www.tailwindsnippets.ml/snippets" },
    {
      Description: "SVG art",
      Website: "https://www.vecteezy.com/free-vector/programmer?license-free=true",
    },
    { Description: "Dev icons", Website: "https://devicon.dev/" },
    { Description: "Animations", Website: "https://animista.net/" },
  ]}
/>
