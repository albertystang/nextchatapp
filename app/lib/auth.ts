import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./db"
import type { NextAuthOptions } from "next-auth"
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
    // @ts-ignore
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string,
        })
    ]
}