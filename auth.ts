import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [],
    trustHost: true,
    secret: process.env.AUTH_SECRET ?? "development-only-auth-secret",
})
