<script>
  import { onMount } from "svelte";
  export let videoId;
  export let componentParams = "modestbranding=1&rel=0";

  function addPrefetch(kind, url, as) {
    const linkElem = document.createElement("link");
    linkElem.rel = kind;
    linkElem.href = url;
    if (as) {
      linkElem.as = as;
    }
    linkElem.crossOrigin = "true";
    document.head.append(linkElem);
  }

  onMount(async () => {
    addPrefetch("preconnect", "https://i.ytimg.com/");
  });

  function warmConnections() {
    // Host that YT uses to serve JS needed by player, per amp-youtube
    addPrefetch("preconnect", "https://s.ytimg.com");

    // The iframe document and most of its subresources come right off
    // youtube.com
    addPrefetch("preconnect", "https://www.youtube.com");

    // The botguard script is fetched off from google.com
    addPrefetch("preconnect", "https://www.google.com");
  }

  let embed;
  let clicked = false;
  function addIframe() {
    clicked = true;
    const params = new URLSearchParams(componentParams);
    params.append("autoplay", "1");

    const iframeEl = document.createElement("iframe");
    iframeEl.title = "Play";
    iframeEl.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframeEl.allowFullscreen = true;
    // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
    // https://stackoverflow.com/q/64959723/89484
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      videoId
    )}?${params.toString()}`;
    embed.append(iframeEl);

    // Set focus for a11y
    iframeEl.focus();
  }
</script>

<lite-youtube
  bind:this={embed}
  on:click|once|preventDefault={addIframe}
  on:pointerover|once|preventDefault={warmConnections}
  class={clicked
    ? "lyt-activated aspect-video mx-auto"
    : "aspect-video mx-auto"}
>
  <picture>
    <source
      srcset="https://i.ytimg.com/vi_webp/{videoId}/hqdefault.webp"
      type="image/webp"
    />
    <source
      srcset="https://i.ytimg.com/vi/{videoId}/hqdefault.jpeg"
      type="image/jpeg"
    />
    <img
      src="https://i.ytimg.com/vi_webp/{videoId}/hqdefault.webp"
      alt="Video Thumbnail"
      aria-label="Video Thumbnail"
      referrerpolicy="origin"
    />
  </picture>
  <button class="lty-playbtn"
    ><span class="lyt-visually-hidden">Play</span></button
  >
</lite-youtube>

<style>
  lite-youtube {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
  }

  /* gradient */
  lite-youtube::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  /* play button */
  lite-youtube > .lty-playbtn {
    width: 68px;
    height: 48px;
    position: absolute;
    cursor: pointer;
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    /* YT's actual play button svg */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
    filter: grayscale(100%);
    transition: filter 0.1s cubic-bezier(0, 0, 0.2, 1);
    border: none;
  }

  lite-youtube:hover > .lty-playbtn,
  lite-youtube .lty-playbtn:focus {
    filter: none;
  }

  lite-youtube > picture,
  lite-youtube > picture > img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    border: 0;
  }

  /* Post-click styles */
  lite-youtube.lyt-activated {
    cursor: unset;
  }
  lite-youtube.lyt-activated::before,
  lite-youtube.lyt-activated > .lty-playbtn {
    opacity: 0;
    pointer-events: none;
  }

  .lyt-visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
