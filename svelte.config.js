// import adapter from 'svelte-adapter-github';
// import preprocess from "svelte-preprocess";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),

// 		// Override http methods in the Todo forms
// 		methodOverride: {
// 			allowed: ['PATCH', 'DELETE']
// 		}
// 	},

// 	preprocess: [
//     preprocess({
//       postcss: true,
//     }),
//   ],
// };

// export default config;

// svelte.config.js
import adapter from 'svelte-adapter-github';

export default {
	kit: {
		adapter: adapter({
			paths: {
				base: '/rayse'
			},
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false,
			domain: 'rayse.app',
			jekyll: false
		})
	}
};

// svelte.config.js
// import adapterGhpages from 'svelte-adapter-ghpages';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// ...
// 	kit: {
// 		// ...
// 		paths: {
// 			base: '/rayse'
// 		},
// 		// ...
// 		adapter: adapterGhpages(
// 			// default options are shown
// 			{ pages: 'build', assets: 'build', fallback: null }
// 		)
// 		// ...
// 	}
// };

// export default config;
