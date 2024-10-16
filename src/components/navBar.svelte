<script>
	import { Button, buttonVariants, Root } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import * as Tabs from '$lib/components/ui/tabs';
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
							<Select.Item value="COMERCIAL DAM, C.A">COMERCIAL DAM, C.A</Select.Item>
							<Select.Item value="CODAMCA">CODAMCA</Select.Item>
							<Select.Item value="DOCTOR LIMPIEZA">DOCTOR LIMPIEZA</Select.Item>
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
				<Tabs.Root>
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
							<Input placeholder="Name" type="text" />
						</div>
						<div style="margin-top: 10px;">
							<Input placeholder="Password" type="password" />
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
                                    <Select.Item value="COMERCIAL DAM, C.A">COMERCIAL DAM, C.A</Select.Item>
                                    <Select.Item value="CODAMCA">CODAMCA</Select.Item>
                                    <Select.Item value="DOCTOR LIMPIEZA">DOCTOR LIMPIEZA</Select.Item>
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
					<Button type="submit">Create</Button>
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
