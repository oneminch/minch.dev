<script setup>
  definePageMeta({
    title: 'GitHub Repos',
    description: 'A collection of GitHub repositories for tracking'
  });

  const route = useRoute();

  useSeoMeta({
    ogTitle: () => 'GitHub Repos · Dawit',
    twitterTitle: () => 'GitHub Repos · Dawit'
  });

  // Parse query parameters and build repo list
  const repos = computed(() => {
    const query = route.query;
    const repoList = [];

    // Iterate through query params: owner:repo1,repo2&owner2:repo3
    for (const [owner, reposString] of Object.entries(query)) {
      if (!owner || !reposString) continue;

      // Handle array values (query params can be arrays)
      const repoNames = Array.isArray(reposString)
        ? reposString.join(',')
        : reposString;

      // Split repos by comma and create list
      const names = repoNames
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0);

      names.forEach(name => {
        repoList.push({
          owner,
          name,
          url: `https://github.com/${owner}/${name}`
        });
      });
    }

    // Sort alphabetically by owner/name
    return repoList.sort((a, b) => 
      `${a.owner}/${a.name}`.localeCompare(`${b.owner}/${b.name}`)
    );
  });

  // Redirect to home if no query params
  if (Object.keys(route.query).length === 0) {
    navigateTo('/');
  }
</script>

<template>
  <article class="[&>*]:my-4 first:[&>*]:mt-0">
    <nuxt-link
      class="inline-flex items-center justify-between px-3 py-1 mb-8! no-underline duration-150 border rounded-md focus-visible:global-focus bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600"
      to="/">
      <Icon name="heroicons:home-20-solid" class="mr-2" />
      Home
    </nuxt-link>
    
    <!-- Header -->
    <section>
      <h1 class="mb-8 text-2xl md:text-4xl font-semibold">GitHub Repos</h1>
      <p class="text-zinc-700 dark:text-zinc-300">
        A collection of GitHub repositories for tracking.
      </p>
    </section>

    <!-- Repos List -->
    <section v-if="repos.length > 0">
      <ul class="space-y-2 list-disc list-inside">
        <li v-for="(repo, index) in repos" :key="`${repo.owner}/${repo.name}-${index}`">
          <a
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-500 hover:text-green-600 dark:hover:text-green-400 underline focus-visible:global-focus rounded-sm">
            {{ repo.owner }}/{{ repo.name }}
          </a>
        </li>
      </ul>
    </section>

    <!-- Empty State (shouldn't happen due to redirect, but just in case) -->
    <section v-else>
      <p class="text-zinc-700 dark:text-zinc-300">
        No repositories found. Please check your query parameters.
      </p>
    </section>
  </article>
</template>
