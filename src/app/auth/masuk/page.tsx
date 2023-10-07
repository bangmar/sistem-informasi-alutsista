import AuthLayout from "@/components/layouts/auth-layout";
import LoginModule from "@/module/auth/login";

const LoginPage = () => {
	return (
		<AuthLayout imgPosition='left' type='login'>
			<LoginModule />
		</AuthLayout>
	);
};

export default LoginPage;
