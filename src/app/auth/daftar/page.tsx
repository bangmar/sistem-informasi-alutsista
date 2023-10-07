import AuthLayout from "@/components/layouts/auth-layout";
import ResgiterModule from "@/module/auth/register";

const RegisterPage = () => {
	return (
		<AuthLayout imgPosition='right' type='register'>
			<ResgiterModule />
		</AuthLayout>
	);
};

export default RegisterPage;
