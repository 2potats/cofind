<script>
	let email = '';

	function validateEmail() {
		const re = new RegExp(
			"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
		);
		return re.test(String(email).toLowerCase());
	}

	async function signUp() {
		// const form = document.getElementById('form');
		// const successBox = document.getElementById('success-box');
		// const errorBox = document.getElementById('error-box');
		// const feedbackBox = document.getElementById('feedback-box');
		// const email = document.getElementsByName('email')[0].value;

		if (!validateEmail()) {
			console.log('invalid email yo ', email);
			// feedbackBox.classList.add('d-block');
			return;
		}

		const headers = {
			// 'Access-Control-Allow-Headers': 'Content-Type'
		};

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify({ email })
		};

		// const response = await fetch('http://localhost:8888/.netlify/functions/index', options);
		const response = await fetch(
			'https://rayse-sign-up.netlify.app/.netlify/functions/index',
			options
		);

		if (response.ok) {
			console.log('woot! ', response);
			// form.classList.add('d-none');
			// successBox.classList.remove('d-none');
		} else {
			console.log('noooooo ', response);
			// form.classList.add('d-none');
			// errorBox.classList.remove('d-none');
		}
	}
</script>

<div class="flex items-stretch shadow-lg">
	<input
		class="bg-gray-100 rounded-xl rounded-r-none text-base leading-none text-gray-800 p-3 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
		type="email"
		placeholder="Your Email"
		bind:value={email}
	/>
	<button
		class="w-48 rounded-l-none hover:bg-pink-500 bg-pink-600 rounded-xl text-base font-medium leading-none text-white p-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
		on:click={signUp}>Join Waiting List</button
	>
</div>
