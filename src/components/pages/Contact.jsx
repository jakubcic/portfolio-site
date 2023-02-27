import React from 'react';

const Contact = () => {
	return (
		<section className='pb-20 pt-8'>
			<div className='container rounded-xl bg-zinc-200 shadow-lg'>
				<div className='relative mx-auto max-w-5xl lg:grid lg:grid-cols-6'>
					{/* <div class="relative mx-auto max-w-7xl"> */}
					<div className='rounded-t-xl bg-blue-600 py-16 px-6 lg:col-span-3 lg:rounded-l-xl lg:rounded-tr-none lg:px-8 lg:pt-24 xl:pr-12'>
						{/* <div class="bg-accent py-16 px-6 lg:px-8 lg:py-24 xl:pr-12"> */}
						<div className='mx-auto max-w-lg'>
							<a name='contact'>
								<h2 className='text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl'>Get in touch</h2>
								<p className='mt-3 text-lg leading-6 text-zinc-100'>
									Please reach out to me if you would like to collaborate on a project or if you have any
									questions about my work.
								</p>
							</a>
							<dl className='mt-8 text-base text-zinc-100'>
								<div>
									<dt className='sr-only'>Postal address</dt>
									<dd className='flex'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='h-6 w-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
											/>
										</svg>
										<p className='ml-3'>West Hartford, CT 06110</p>
									</dd>
								</div>
								<div className='mt-3'>
									<dt className='sr-only'>Email</dt>
									<dd className='flex'>
										{/* Heroicon name: outline/envelope */}
										<svg
											className='text-base-100 h-6 w-6 flex-shrink-0'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
											/>
										</svg>
										<span className='ml-3 hover:underline'>
											<a href='mailto:jakub@uconn.edu'>jakub@uconn.edu</a>
										</span>
									</dd>
								</div>
							</dl>
							<p className='mt-6 font-semibold text-zinc-900'>
								Are you a recruiter?
								<p>
									{' '}
									<a
										href='https://www.linkedin.com/in/jakubcic/'
										target='_blank'
										className='font-medium text-zinc-100 underline'
									>
										Please check out my LinkedIn
									</a>
								</p>
							</p>
						</div>
					</div>
					{/* future development: contact form that will send me an email */}
					<div className='py-8 px-6 max-lg:m-0 max-lg:rounded-none lg:col-span-3 lg:py-24 lg:px-8'>
						<div className='mx-auto max-w-lg lg:max-w-none'>
							{/* change action to API endpoint and method to POST when I have a server ready */}
							<form action='/contact' method='GET' className='grid grid-cols-1 gap-y-6'>
								<div>
									<label htmlFor='full-name' className='sr-only'>
										Full name
									</label>
									<input
										type='text'
										name='full-name'
										id='full-name'
										autoComplete='name'
										className='focus:border-accent focus:ring-accent block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
										placeholder='Full name'
									/>
								</div>
								<div>
									<label htmlFor='email' className='sr-only'>
										Email
									</label>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='focus:border-accent focus:ring-accent block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
										placeholder='Email'
									/>
								</div>
								<div>
									<label htmlFor='phone' className='sr-only'>
										Phone
									</label>
									<input
										type='text'
										name='phone'
										id='phone'
										autoComplete='tel'
										className='focus:border-accent focus:ring-accent block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm'
										placeholder='Phone'
									/>
								</div>
								<div>
									<label htmlFor='message' className='sr-only'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows='4'
										className='block h-40 w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-700 focus:ring-blue-700'
										placeholder='Message'
									></textarea>
								</div>
								<div>
									{/* <button type='submit' className='btn btn-sm btn-secondary inline-flex justify-center'>
										Submit
									</button> */}
									<button type='submit' className='inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='mr-1 inline-block h-4 w-4'
											viewBox='0 0 16 16'
										>
											<path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z' />
										</svg>
										<span className='mt-0.5'>Submit</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
