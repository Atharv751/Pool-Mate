import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23limPi4hFfSwAFQTQ',
            clientSecret: 'bfe1fc9cd2588f60d9c6a778540777ab71437056',
        }),
        GoogleProvider({
            clientId: 'your-google-client-id',
            clientSecret: 'your-google-client-secret',
        }),
        {
            id: "email-password",
            name: "Email and Password",
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // Replace this with your own logic to validate email and password
                if (email === "test@example.com" && password === "password123") {
                    return { id: 1, name: "Test User", email: "test@example.com" };
                }

                // If login fails, return null
                return null;
            },
        },
    ],
};

export default NextAuth(authOptions);