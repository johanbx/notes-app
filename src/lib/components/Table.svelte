<script lang="ts">
  export let list: { [title: string]: string }[];

  $: keys = Object.keys(list[0]);
</script>

<div class="container flex justify-center mx-auto">
  <div class="flex flex-col">
    <div class="w-full">
      <div class="border-b border-gray-200 shadow">
        <table class="divide-y divide-gray-300 ">
          <thead class="bg-gray-50">
            <tr>
              {#each keys as key}
                <th class="px-6 py-2 text-xs text-gray-500">
                  {key}
                </th>
              {/each}
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-300">
            {#each list as entry}
              <tr class="whitespace-nowrap prose">
                {#each keys as key}
                  {@const value = entry[key]}
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {#if value.startsWith("http")}
                      <a href={value}>{value}</a>
                    {:else}
                      {value || ""}
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
