<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import * as Tabs from '$lib/components/ui/tabs';

	let comnpanyName = '';
	let comnpanyPassword = '';
	let text = 'Create';
	export let companies;
	const newCompany = async (company: string, password: string) => {
		if (comnpanyName.length > 0 && comnpanyPassword.length > 0 && text == 'Create') {
			if (!companies.find((e: any) => e.name == company)) {
				text = 'Please wait...';

				const { data, error } = await supabase
					.from('company')
					.insert([{ name: company, password }]);
				alert('Created');
				comnpanyName=""
				comnpanyPassword=""
				text = 'Create';
			} else {
				alert('company already exists');
			}
		}
	};
</script>

<nav class="nav_bar">
	<span>Point of Sale</span>
	<div class="buttons">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Log in</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Log In</Dialog.Title>

					<Dialog.Description>
						Select Your company and Log In with your credentials
					</Dialog.Description>
				</Dialog.Header>
				<div>
					<Select.Root>
						<Select.Trigger class="w-[100%]">
							<Select.Value placeholder="Company" />
						</Select.Trigger>
						<Select.Content>
							{#each companies as company}
								<Select.Item value={company.name}>{company.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div>
					<Input placeholder="Username" type="text" />
				</div>
				<div>
					<Input placeholder="Password" type="password" />
				</div>
				<Dialog.Footer>
					<Button type="submit">Log In</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'default' })}
				>Create a Company / sucursal</Dialog.Trigger
			>
			<Dialog.Content>
				<Tabs.Root style="margin-top:20px;">
					<Tabs.List class="grid w-full grid-cols-2">
						<Tabs.Trigger value="Company">Company</Tabs.Trigger>
						<Tabs.Trigger value="Sucursal">Sucursal</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="Company">
						<Dialog.Header style="margin-top:15px;">
							<Dialog.Title>Create a Company</Dialog.Title>

							<Dialog.Description>Let's add your company to the comnpany list</Dialog.Description>
						</Dialog.Header>
						<div style="margin-top: 20px;">
							<Input placeholder="Name" bind:value={comnpanyName} type="text" />
						</div>
						<div style="margin-top: 10px;">
							<Input placeholder="Password" bind:value={comnpanyPassword} type="password" />
						</div>
					</Tabs.Content>
					<Tabs.Content value="Sucursal">
						<Dialog.Header style="margin-top:15px;">
							<Dialog.Title>Add a sucursal to your company</Dialog.Title>

							<Dialog.Description>Let's add a sucursal to your company!</Dialog.Description>
						</Dialog.Header>
						<div style="margin-top:20px ;">
							<Select.Root>
								<Select.Trigger class="w-[100%]">
									<Select.Value placeholder="Company" />
								</Select.Trigger>
								<Select.Content>
									{#each companies as company}
										<Select.Item value={company.name}>{company.name}</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
						<div style="margin-top:10px ;">
							<Input placeholder="Sucursal's name" type="text" />
						</div>
						<div style="margin-top:10px ;">
							<Input placeholder="Address" type="text" />
						</div>
						<div style="margin-top:10px ;">
							<Input placeholder="Company's password" type="password" />
						</div>
					</Tabs.Content>
				</Tabs.Root>
				<Dialog.Footer>
					<Button
						disabled={text == 'Please wait...' ? true : false}
						on:click={async () => newCompany(comnpanyName, comnpanyPassword)}>{text}</Button
					>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</nav>

<style>
	nav {
		margin: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		font-size: 18px;
		font-weight: bold;
	}
</style>
