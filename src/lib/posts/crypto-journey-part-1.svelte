<section>
	<p>
		About a year ago, I started to gain interest in cryptography due to reading through some tweets
		by <a
			class="underline"
			href="https://twitter.com/FiloSottile"
			rel="noopener noreferrer external"
			target="_blank">Filippo Valsorda</a
		>. It all began with a specific tweet of him that randomly landed to my TL, which sadly I can't
		find nor remember anymore. Since then, I looked around a bit, and I have decided to study
		cryptography by myself. The more time passes, the more I feel good studying it (although,
		honestly, it is not very easy).
	</p>

	<p class="mt-6">
		I've decided to start blogging about my journey into the vast field of cryptography thanks to <a
			class="underline"
			href="https://soatok.blog/2020/11/27/the-subtle-hazards-of-real-world-cryptography/"
			rel="noopener noreferrer external"
			target="_blank">this post</a
		>
		by
		<a
			class="underline"
			href="https://twitter.com/SoatokDhole"
			rel="noopener noreferrer external"
			target="_blank">Soatok</a
		>, so here I am.
	</p>
</section>

<section class="mt-9">
	<h2 class="font-serif text-gray-800 text-3xl my-4">My first book on cryptography</h2>

	<p class="mb-6">
		I have to admit that I'm not much of a reader. At the same time, though, I was genuinely very
		interested in the topic. For these reasons, I searched for a book that was both comprehensive
		and smooth to read. I decided on
		<a
			class="underline"
			href="https://nostarch.com/seriouscrypto"
			rel="noopener noreferrer external"
			target="_blank">Serious Cryptography</a
		>
		by
		<a
			class="underline"
			href="https://twitter.com/veorq"
			rel="noopener noreferrer external"
			target="_blank">Jean-Philippe Aumasson</a
		>.
	</p>

	<blockquote class="twitter-tweet" data-dnt="true">
		<p lang="en" dir="ltr">
			New Year&#39;s Resolution ✨🔐<a href="https://twitter.com/veorq?ref_src=twsrc%5Etfw"
				>@veorq</a
			> <a href="https://t.co/i0z0rYOt0d">pic.twitter.com/i0z0rYOt0d</a>
		</p>
		&mdash; Simone Ragusa 🍃🤍🩸 (@BuriedInTheGnd)<a
			href="https://twitter.com/BuriedInTheGnd/status/1347878402972381184?ref_src=twsrc%5Etfw"
			>January 9, 2021</a
		>
	</blockquote>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

	<p class="mt-6">
		I found this book super good as a starting point as it is well organized. It starts with a brief
		introduction mentioning some of the most historically famous ciphers, such as the <a
			class="underline"
			href="https://en.wikipedia.org/wiki/Caesar_cipher"
			rel="noopener noreferrer external"
			target="_blank">Caesar cipher</a
		>, then it goes straight to defining what is and how a cipher works from a high-level
		perspective. The first chapter also explains the concepts of security and attack models, along
		with some useful examples.
		<br />
		The second chapter, then, explores the notion of randomness, bringing examples of bad practices so
		that you can avoid them. Randomness is often not considered as much as it should, so having an entire
		chapter about it is a good thing.
		<br />
		The third chapter expands on the concept of security, and the two subsequent chapters talk about
		the two main types of ciphers: blocks ciphers and stream ciphers.
	</p>

	<p class="mt-6">
		This book mentions and explains bad practices and broken implementations many times; indeed,
		every single chapter has a section called <span class="italic">"How Things Can Go Wrong"</span>.
		I found that particularly useful to get an idea of how easy it is to do things in the wrong way.
	</p>

	<p class="mt-6">
		The rest of the book explains the hash functions, authenticated encryption, and finally, there
		are some chapters about public-key cryptography (RSA, Diffie-Hellman, TLS, etc.).
		<br />
		Lastly, chapter 14 unfolds the topic of quantum computing and post-quantum algorithms.
	</p>

	<p class="mt-6">
		In the end, the most important thing I got from this book is general knowledge of the various
		topics of cryptography. From these things, I can explore further and learn a lot more.
		Nevertheless, this book has a lot more to offer, but I couldn't stress every single detail at
		the first reading. I will surely use this book as a reference because I love how it is
		structured, and also because, at the end of every chapter, there are lots of further readings
		suggested.
	</p>
</section>

<section class="mt-9">
	<h2 class="font-serif text-gray-800 text-3xl my-4">An online course? Why not!</h2>

	<p class="mb-6">
		As I said, reading is not exactly my thing. When it comes to learning something new, the
		approach I usually take consists of two things. I watch videos about the topic, and I try to
		learn by doing.
	</p>

	<p class="mb-6">
		Reading <span class="italic">Serious Cryptography</span> taught me that this field has many
		subtleties to watch out for, and just watching some YouTube videos may not be a good idea.
		Still, I don't think we should undervalue YouTube videos.
		<br />
		To start on the right path, I decided to look for an online course. I was looking for something free
		and widely tested at the same time. My choice fell on
		<a
			class="underline"
			href="https://www.coursera.org/learn/crypto"
			rel="noopener noreferrer external"
			target="_blank">Cryptography I</a
		>
		by Dan Boneh.
		<br />
		The contents are a little bit old, but most of them are still valid. All in all, I found this course
		very instructive.
	</p>

	<p class="mb-6">
		The topics covered are more or less the same as in Aumasson's book. There are some more things,
		and others are missing. In general, this course has much more mathematical definitions compared
		to Aumasson's book. For this reason, in the proposed exercises in the weekly tests, you have to
		be rigorous, or you may give the wrong answer for a stupid (but important when it comes to the
		real world) subtlety.
	</p>

	<p class="mb-6">
		Albeit not mandatory, I have done all the programming projects assigned at the end of every
		week. I highly recommend doing so to everybody who starts this course. That's because come out
		with a 100% working solution requires a complete understanding of the topic. Also, dealing with
		a programming language brings out more details you should take care of and isn't that trivial.
	</p>
</section>

<section class="mt-9">
	<h2 class="font-serif text-gray-800 text-3xl my-4">Next steps</h2>

	<p class="mb-6">
		To pursue my intent of studying (and, hopefully, working with) cryptography, I have already
		embarked on solving the
		<a
			class="underline"
			href="https://cryptopals.com/"
			rel="noopener noreferrer external"
			target="_blank">cryptopals</a
		>, which I will talk about next time.
		<br />
		I also planned to read another book, a more technical one.
	</p>

	<p class="mb-6">
		Thank you for reading about my experience. I hope you'll find that helpful in some way.
		<br />
		See you next time!
	</p>
</section>

<hr class="mt-11" />

<section class="mt-9">
	<p class="mb-6 text-center">
		If you liked this content, feel free to share!
		<br />
		Also, don't hesitate to DM me
		<a
			class="underline"
			href="https://twitter.com/BuriedInTheGnd"
			rel="noopener noreferrer external"
			target="_blank">on Twitter</a
		> if you would like to talk about it!
	</p>
</section>
