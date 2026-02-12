import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import dbConnect from "@/lib/db"
import User from "@/models/User"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log("SignIn callback triggered:", { user, account });
            if (account?.provider === 'google') {
                try {
                    console.log("Connecting to DB...");
                    await dbConnect();
                    console.log("DB Connected. Finding user...", user.email);
                    const existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        console.log("User not found. Creating new user...");
                        await User.create({
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            provider: 'google',
                        });
                        console.log("User created successfully.");
                    } else {
                        console.log("User found:", existingUser);
                    }
                    return true;
                } catch (error) {
                    console.error("Error saving user to DB:", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session }) {
            // Optional: attach user ID to session if needed later
            return session
        }
    },
})
