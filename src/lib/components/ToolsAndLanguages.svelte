<script lang="ts">
  import Css3Svg from "$lib/components/svg//Css3Svg.svelte";
  import DockerSvg from "$lib/components/svg//DockerSvg.svelte";
  import ExpressSvg from "$lib/components/svg//ExpressSvg.svelte";
  import GithubSvg from "$lib/components/svg//GithubSvg.svelte";
  import GitSvg from "$lib/components/svg//GitSvg.svelte";
  import Html5Svg from "$lib/components/svg//Html5Svg.svelte";
  import JavascriptSvg from "$lib/components/svg//JavascriptSvg.svelte";
  import NodejsSvg from "$lib/components/svg//NodejsSvg.svelte";
  import NpmSvg from "$lib/components/svg//NpmSvg.svelte";
  import ReactSvg from "$lib/components/svg//ReactSvg.svelte";
  import SlackSvg from "$lib/components/svg//SlackSvg.svelte";
  import SvelteSvg from "$lib/components/svg//SvelteSvg.svelte";
  import TailwindcssSvg from "$lib/components/svg//TailwindcssSvg.svelte";
  import TypescriptSvg from "$lib/components/svg//TypescriptSvg.svelte";
  import UbuntuSvg from "$lib/components/svg//UbuntuSvg.svelte";
  import VsCodeSvg from "$lib/components/svg//VsCodeSvg.svelte";
  import WebpackSvg from "$lib/components/svg//WebpackSvg.svelte";
  import Vibrate from "./Vibrate.svelte";

  const icons = [
    { component: Css3Svg, title: "CSS 3" },
    { component: DockerSvg, title: "Docker" },
    { component: ExpressSvg, title: "ExpressJS" },
    { component: GithubSvg, title: "GitHub" },
    { component: GitSvg, title: "Git" },
    { component: Html5Svg, title: "HTML5" },
    { component: JavascriptSvg, title: "JavaScript" },
    { component: NodejsSvg, title: "NodeJS" },
    { component: NpmSvg, title: "Node package manager (npm)" },
    { component: ReactSvg, title: "React" },
    { component: SlackSvg, title: "Slack" },
    { component: SvelteSvg, title: "Svelte and SvelteKit" },
    { component: TailwindcssSvg, title: "TailwindCSS" },
    { component: TypescriptSvg, title: "TypeScript" },
    { component: UbuntuSvg, title: "Ubuntu" },
    { component: VsCodeSvg, title: "VS Code" },
    { component: WebpackSvg, title: "Webpack" },
  ];
</script>

<div class="grid grid-cols-6 gap-6">
  {#each icons as { component, title }}
    <Vibrate>
      <figure {title} alt={title}>
        <svelte:component this={component} />
      </figure>
    </Vibrate>
  {/each}
</div>
